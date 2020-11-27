import { HttpEvent, HttpRequest, HttpResponse, HttpBackend } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

export class MockXHRBackend implements HttpBackend {
  private actionCategory = {
    id: 1,
    title: "Action"
  };
  private scifiCategory = {
    id: 2,
    title: "Science Fiction"
  };
  private psychologyCategory = {
    id: 3,
    title: "Psychology"
  };
  private nonFictionCategory = {
    id: 4,
    title: "Non-Fiction"
  };
  private dystopianCategory= {
    id: 5,
    title: "Dystopian"
  };

  private book1 = {
    id: 1,
    title: "War of the Worlds",
    author: "H. G. Wells",
    status: "wishlisted",
    categories: [
      this.actionCategory,
      this.scifiCategory,
      this.dystopianCategory,
    ]
  };
  private book2 = {
    id: 2,
    title: "1984",
    author: "George Orwell",
    status: "wishlisted",
    categories: [
      this.scifiCategory,
      this.dystopianCategory
    ]
  };

  private book3 = {
    id: 3,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    status: "wishlisted",
    categories: [
      this.nonFictionCategory,
      this.psychologyCategory
    ]
  };

  private categories = [this.actionCategory, this.scifiCategory, this.psychologyCategory, this.nonFictionCategory, this.dystopianCategory];
  private books = [this.book1, this.book2, this.book3];

  handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    return new Observable((responseObserver: Observer<HttpResponse<any>>) => {
      let responseOptions;
      switch (request.method) {
        case 'GET':
          if (request.urlWithParams.includes('categories') || request.urlWithParams.includes('status') || request.url === 'books') {
            let returnBooks = this.books;
            //filter by all parameters in the url
            let params = request.urlWithParams.split('?')[1].split('&');
            for (const param in params) {
              let filter = params[param].split('=');
              if(filter[1] !== "")
              {
                if(filter[0] === "categories")
                {
                  returnBooks = this._filterbyFieldArrayObjId(filter, returnBooks);
                }
                else
                {
                  returnBooks = this._filterByFieldString(filter, returnBooks);
                }
              }
            }

            responseOptions = {
              body: {books: JSON.parse(JSON.stringify(returnBooks))},
              status: 200
            };
          } else {
            //find book by id
            let books;
            const idToFind = parseInt(request.url.split('/')[1], 10);
            books = this.books.filter(i => i.id === idToFind);
            responseOptions = {
              body: JSON.parse(JSON.stringify(books[0])),
              status: 200
            };
          }
          break;

        case 'POST':
          const book = request.body;
          book.id = this._getNewBookId();
          book.categories.forEach(category => {
            if(!this._categoryExists(category))
            {
              category.id = this._getNewCategoryId();
              this.categories.push(category);
            }
          });
          this.books.push(book);
          responseOptions = {status: 201};
          break;

        case 'DELETE':
          const id = parseInt(request.url.split('/')[1], 10);
          this._deleteBook(id);
          responseOptions = {status: 200};
      }

      const responseObject = new HttpResponse(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => {
      };
    });
  }

  //Delete book
  _deleteBook(id) {
    const book = this.books.find(i => i.id === id);
    const index = this.books.indexOf(book);
    if (index >= 0) {
      this.books.splice(index, 1);
    }
  }

  //Gives a new book an id
  _getNewBookId() {
    if (this.books.length > 0) {
      return Math.max.apply(Math, this.books.map(book => book.id)) + 1;
    } else {
      return 1;
    }
  }

  //Checks existing categories for category
  _categoryExists(category) {
    if (this.categories.length > 0) {
      return (category.id !== 0);
    } else {
      return false;
    }
  }

  //Gets a category id for a newly found category
  _getNewCategoryId() {
    if (this.categories.length > 0) {
      return Math.max.apply(Math, this.categories.map(category => category.id)) + 1;
    } else {
      return 1;
    }
  }

  //Filters by an array within the books and looks for a correct id
  _filterbyFieldArrayObjId(filter, returnBooks) {
    return returnBooks.filter(book => {
      for (const element in book[filter[0]])
      {
        if(book[filter[0]][element].id.toString() === filter[1])
        {
          return true;
        }
        else
        {
          return false;
        }
      }
    });
  }

  //Filters by a field in the books object for a string
  _filterByFieldString(filter, returnBooks) {
    return returnBooks.filter(book => {
      return book[filter[0]] === filter[1];
    });
  }
}

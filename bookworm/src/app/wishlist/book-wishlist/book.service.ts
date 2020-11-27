import { Category } from '../category-list/category.service'
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  //category ids and status
  get(categories: string, status: string ) {
    const getOptions = {
      params: { categories, status }
    };
    return this.http.get<BooksResponse>('books', getOptions)
      .pipe(
        map((response: BooksResponse) => {
          return response.books;
        }),
        catchError(this.handleError)
      );
  }

  add(book: Book) {
    return this.http.post('books', book)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(book: Book) {
    return this.http.delete(`books/${book.id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError('A data error occurred, please try again.');
  }
}

interface BooksResponse {
  books: Book[];
}

export interface Book {
  id: number;
  title: string;
  author: string;
  status: string;
  categories: Category[];
}

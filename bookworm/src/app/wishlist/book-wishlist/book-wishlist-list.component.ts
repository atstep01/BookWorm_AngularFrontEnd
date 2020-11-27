import { Component, OnInit } from '@angular/core';
import { Book, BookService } from './book.service';

@Component({
  selector: 'bw-book-wishlist-list',
  templateUrl: './book-wishlist-list.component.html',
  styleUrls: ['./book-wishlist-list.component.css']
})
export class BookWishlistListComponent implements OnInit {
  books: Book[];

  constructor(
    private booksService: BookService) {}

  ngOnInit() {
    this.getBooks('', "wishlisted");
  }

  getBooks(categoriesId: string, status: string) {
    this.booksService.get(categoriesId, status)
      .subscribe(books => {
        this.books = books;
      });
  }
}

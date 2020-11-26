import { Component } from '@angular/core';
import { Category } from '../category-list/category.service';
import { Book } from './book-wishlist.service';

@Component({
  selector: 'bw-book-wishlist-list',
  templateUrl: './book-wishlist-list.component.html',
  styleUrls: ['./book-wishlist-list.component.css']
})
export class BookWishlistListComponent {
  actionCategory: Category = {
    id: 0,
    title: "Action"
  };
  scifiCategory: Category = {
    id: 1,
    title: "Science Fiction"
  };
  psychologyCategory: Category = {
    id: 2,
    title: "Psychology"
  };
  nonFictionCategory: Category = {
    id: 3,
    title: "Non-Fiction"
  };
  dystopianCategory: Category = {
    id: 4,
    title: "Dystopian"
  };

  book1: Book = {
    id: 0,
    title: "War of the Worlds",
    author: "H. G. Wells",
    categories: [
      this.actionCategory,
      this.scifiCategory,
      this.dystopianCategory,
    ]
  };
  book2: Book = {
    id: 1,
    title: "1984",
    author: "George Orwell",
    categories: [
      this.scifiCategory,
      this.dystopianCategory
    ]
  };

  book3: Book = {
    id: 2,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    categories: [
      this.nonFictionCategory,
      this.psychologyCategory
    ]
  };

  books: Book[] = [this.book1, this.book2, this.book3];

}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bw-book-wishlist',
  templateUrl: './book-wishlist.component.html',
  styleUrls: ['./book-wishlist.component.css']
})
export class BookWishlistComponent {
  @Input() book;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.book);
  }
}

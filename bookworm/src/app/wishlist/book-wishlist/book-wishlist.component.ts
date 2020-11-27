import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bw-book-wishlist',
  templateUrl: './book-wishlist.component.html',
  styleUrls: ['./book-wishlist.component.css']
})
export class BookWishlistComponent {
  @Input() book;
  @Output() buy = new EventEmitter();

  onBuy() {
    this.buy.emit(this.book);
  }
}

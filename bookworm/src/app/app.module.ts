import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookWishlistListComponent } from './wishlist/book-wishlist/book-wishlist-list.component'
import { BookWishlistComponent } from './wishlist/book-wishlist/book-wishlist.component'
import { CategoryListComponent } from './wishlist/category-list/category-list.component'
import { CategoryListPipe } from './wishlist/category-list/category-list.pipe'

@NgModule({
  declarations: [
    AppComponent,
    BookWishlistComponent,
    BookWishlistListComponent,
    CategoryListComponent,
    CategoryListPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

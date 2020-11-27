import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookWishlistListComponent } from './wishlist/book-wishlist/book-wishlist-list.component'
import { BookWishlistComponent } from './wishlist/book-wishlist/book-wishlist.component'
import { CategoryListComponent } from './wishlist/category-list/category-list.component'
import { CategoryListPipe } from './wishlist/category-list/category-list.pipe'
import { MockXHRBackend } from './mock-xhr-backend'

@NgModule({
  declarations: [
    AppComponent,
    BookWishlistComponent,
    BookWishlistListComponent,
    CategoryListComponent,
    CategoryListPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

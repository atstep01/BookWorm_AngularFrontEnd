import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {
  transform(books) {
    const categories = [];
    books.forEach(book => {
       book.categories.forEach( category => {
         if (categories.indexOf(category.title) <= -1) {
            categories.push(category.title);
          }
       })
    });
    console.log(categories);
    return categories;
  }
}

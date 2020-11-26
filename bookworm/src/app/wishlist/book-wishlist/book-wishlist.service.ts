//Http for wishlist books
import { Category } from '../category-list/category.service'

export interface Book {
  id: number;
  title: string;
  author: string;
  categories: Category[];
}

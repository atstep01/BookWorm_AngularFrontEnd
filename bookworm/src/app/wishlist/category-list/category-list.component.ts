import { Component, Input } from '@angular/core';

@Component({
  selector: 'bw-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  @Input() categories: string[];
}

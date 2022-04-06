import { Component } from '@angular/core';
import { Ingridient } from '../shared/ingridients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingridients: Ingridient[] = [
    new Ingridient('tomato', 5),
    new Ingridient('apple', 4),
  ];
}

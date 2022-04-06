import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Recipe description 1', 'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg'),
    new Recipe('Recipe 2', 'Recipe description 2', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg'),
  ]
}

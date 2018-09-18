import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Vegan Nachos', 'Nachos made with all vegan ingredients', 'https://www.rawtillwhenever.com/wp-content/uploads/2015/08/bad-ass-vegan-nachosa.png', [
      new Ingredient('Tortilla chips', 1),
      new Ingredient('Vegan Cheese', 5),
      new Ingredient('Black Beans', 1)
    ]),
    new Recipe('Vegan Pizza', 'Pizza made with all vegan ingredients', 'https://realfood.tesco.com/media/images/RFO-Vegan-Pizza-1400X919-05ee14fe-5367-4e77-965a-b5b28dc32709-0-1400x919.jpg', [
      new Ingredient('Vegan Cheese', 5),
      new Ingredient('Pizza dough', 1),
      new Ingredient('Tomato Sauce', 5)
    ])
  ];
  constructor() { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  createRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

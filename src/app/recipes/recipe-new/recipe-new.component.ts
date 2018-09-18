import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {
  recipe: Recipe;
  name: string = '';
  description: string;
  imagePath: string;
  ingredientName: string;
  ingredientAmount: number;
  ingredient: Ingredient;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log(this.recipe.name)
  }

  onCreateRecipe() {
    console.log(this.recipe.name);
    // this.recipe: Recipe = {name: name, description: description, imagePath: imagePath, ingredients}
    // this.recipeService.createRecipe(this.recipe);
  }
    
}

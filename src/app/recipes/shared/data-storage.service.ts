import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://udemy-shopping-list-cabf3.firebaseio.com/data/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    
    return this.http.get('https://udemy-shopping-list-cabf3.firebaseio.com/data/recipes.json?auth=' + token)
    .pipe(map((response: any[]) => {
      const recipes: Recipe[] = response;
      for (let recipe of recipes) {
        if (!recipe['ingredients']) {
          console.log((recipe));
          recipe['ingredients'] = [];
        }
      }
      return recipes;
    }))
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}

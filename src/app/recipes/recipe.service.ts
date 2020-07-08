import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    recipesList: Recipe[] = [
        new Recipe("Paneer Rolls", "Paneer with chutney", "https://realfood.tesco.com/media/images/Ritas-enchiladas-recipe-1400x919-1c7ff22b-ea5e-44cf-9ada-d7b04420002f-0-1400x919.jpg"),
        new Recipe("Kadhai Paneer", "Paneer with Kadhai", "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg"),
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipesList.slice();
    }


}
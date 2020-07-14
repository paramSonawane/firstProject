import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private slService :ShoppingListService){}

    recipesList: Recipe[] = [
        new Recipe(
            "Paneer Rolls",
            "Paneer with chutney",
            "https://realfood.tesco.com/media/images/Ritas-enchiladas-recipe-1400x919-1c7ff22b-ea5e-44cf-9ada-d7b04420002f-0-1400x919.jpg",
            [
                new Ingredient('Paneer', 20),
                new Ingredient('Maida', 52)
            ]
        ),
        new Recipe(
            "Kadhai Paneer",
            "Paneer with Kadhai",
            "https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg",
            [
                new Ingredient('Kadhai', 1),
                new Ingredient('Paneer', 34)
            ]
        ),
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipesList.slice();
    }

    addIngredientsToShoppingList(ingredient :Ingredient[]){
        this.slService.addIngredients(ingredient);
    }


}
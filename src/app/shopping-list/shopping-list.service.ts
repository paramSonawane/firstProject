import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Tomatoes", 45),
        new Ingredient("Apples", 5),
        new Ingredient("Paneer", 74),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient :Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}
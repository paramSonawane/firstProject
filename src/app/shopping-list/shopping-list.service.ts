import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Tomatoes", 45),
        new Ingredient("Apples", 5)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient :Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients :Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}
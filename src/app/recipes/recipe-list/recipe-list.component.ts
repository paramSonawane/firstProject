import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipesList :Recipe[] = [];

    constructor(private recipeService :RecipeService) { }

    ngOnInit(): void {
        this.recipesList = this.recipeService.getRecipes();
    }

}
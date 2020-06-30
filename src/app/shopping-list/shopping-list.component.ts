import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Test ingredient", 45),
    new Ingredient("Test2 ingredient", 5),
    new Ingredient("Test3 ingredient", 74),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

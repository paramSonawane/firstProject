import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './header/shopping/shopping.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

@Ng;
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component'Module({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    RecipesComponent,
    RecipeDetailComponent,
  ,
    RecipeListComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

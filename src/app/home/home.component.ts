import { Component, OnInit } from '@angular/core';

import { RecipeService } from "../shared/recipe.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipeList = [];
  favouriteRecipe = [];
  constructor(private recipeService: RecipeService) {
    this.recipeService.recipeChanged.subscribe(res => {
      this.recipeList = res;
    });
    this.recipeList = this.recipeService.getRecipe();

    this.recipeList.forEach(item => {
      if (item.like) {
        this.favouriteRecipe.push(item);
      }
    });
  }

  ngOnInit() {
  }

  onSearch(value) {
    console.log(value);
    let tempRecipes = this.favouriteRecipe;
    if (value) {
      return this.favouriteRecipe = tempRecipes.filter(item => item.name.includes(value));
    } else {
      return this.favouriteRecipe = this.favouriteRecipe;
    }

    console.log(this.favouriteRecipe);
  }

}

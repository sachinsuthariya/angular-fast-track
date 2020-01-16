import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../shared/recipe.service";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList = [];
  constructor(private http: HttpClient,
    public recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeChanged.subscribe(res => {
      this.recipeList = res;
    });
    this.recipeList = this.recipeService.getRecipe();
  }

}

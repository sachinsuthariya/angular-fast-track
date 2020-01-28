import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, {
    path: "addRecipe",
    component: AddRecipeComponent
  },
  {
    path: 'allRecipe',
    component: RecipeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

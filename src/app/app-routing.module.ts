import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
const routes: Routes = [
  {
    path: "",
    component: AddRecipeComponent
  }, {
    path: "list",
    component: RecipeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

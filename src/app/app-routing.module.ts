import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { HomeComponent } from './home/home.component';

import { AuthGuardService } from "./shared/authGuard.service";
const routes: Routes = [
  {
    path: "",
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "addRecipe",
    component: AddRecipeComponent
  },
  {
    path: 'allRecipe',
    component: RecipeListComponent
  }
  // ]

  // {
  //   path: "",
  //   component: HomeComponent
  // },
  // {
  //   path: "addRecipe",
  //   component: AddRecipeComponent
  // },
  // {
  //   path: 'allRecipe',
  //   component: RecipeListComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

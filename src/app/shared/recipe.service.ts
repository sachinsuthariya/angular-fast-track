import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipe = [];
  recipeChanged = new Subject<any>();
  constructor() {

    // init recipes
    this.recipe = [
      {
        name: 'Burger',
        chef: 'Ranveer Brar',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in.",
        image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
        type: 'veg',
        like: false
      },
      {
        name: 'Italian Pasta',
        chef: 'JM',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in.",
        image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
        type: 'non-veg',
        like: true
      },
      {
        name: 'Chicken Maggie',
        chef: 'Nisha Madhulika',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in.",
        image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
        type: 'veg',
        like: false
      },
      {
        name: 'Veg. Pulav',
        chef: 'Tarla Dalal',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in.",
        image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
        type: 'non-veg',
        like: true
      },
    ];
  }

  addRecipe(recipe: object) {
    this.recipe.push(recipe);
    this.recipeChanged.next(this.recipe.slice());
  }

  getRecipe() {
    return this.recipe.slice();
  }

  addToFavorite(index) {
    return this.recipe[index].like = !this.recipe[index].like;
  }
}
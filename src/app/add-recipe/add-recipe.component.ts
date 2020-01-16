import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../shared/recipe.service";
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})


export class AddRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  foodType = [];
  constructor(private fb: FormBuilder, private http: HttpClient, public recipeService: RecipeService) {

    // form
    this.recipeForm = this.fb.group({
      firstName: ['', Validators.required],
      imgURL: ['', Validators.required],
      description: [''],
      foodType: ['', Validators.required],
      author: ['', Validators.required]
    });

    // food type Init
    this.foodType = [
      { type: "veg" },
      { type: "non-veg" }
    ];
  }

  addNewRecipe() {
    if (this.recipeForm.valid) {
      const {
        firstName,
        imgURL,
        foodType,
        description,
        author
      } = this.recipeForm.value;

      const data = {
        name: firstName,
        image: imgURL,
        type: foodType,
        desc: description,
        chef: author
      };
      this.recipeService.addRecipe(data);
      this.recipeForm.reset();
    } else {
      alert("All fields are required");
    }
  }

  ngOnInit() {
  }

}

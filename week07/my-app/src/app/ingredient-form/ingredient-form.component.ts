import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css'],
})
export class IngredientFormComponent {
  ingredientForm: FormGroup;
  recipes: any[] = [];

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private router: Router
  ) {
    this.ingredientForm = this.fb.group({
      ingredients: [''],
    });
  }

  onSubmit() {
    const ingredients = this.ingredientForm.value.ingredients.split(',');
    this.recipeService.getRecipes(ingredients).subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/recipe', id]);
  }
}

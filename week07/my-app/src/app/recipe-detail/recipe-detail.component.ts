import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router'; // For potential navigation

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeId: number | null = null;  // recipeId can be null initially
  recipe: any;
  errorMessage: string = '';  // To handle potential errors

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router // For navigation if needed
  ) {}

  ngOnInit(): void {
    // Safely extract the ID from the route params and handle the case where 'id' might be null
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      this.recipeId = +idParam;  // Convert the id string to a number
      this.fetchRecipeDetails();
    } else {
      this.errorMessage = 'Recipe ID is missing in the URL.';
    }
  }

  private fetchRecipeDetails(): void {
    if (this.recipeId !== null) {
      this.recipeService.getRecipeDetail(this.recipeId).subscribe(
        (recipe) => {
          this.recipe = recipe;
        },
        (error) => {
          this.errorMessage = 'Error fetching recipe details. Please try again later.';
        }
      );
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiKey = 'YOUR_API_KEY';  // Replace with your actual API key from Spoonacular
  private apiUrl = 'https://api.spoonacular.com/recipes/findByIngredients';

  constructor(private http: HttpClient) {}

  // Fetch recipes based on ingredients
  getRecipes(ingredients: string[]): Observable<any[]> {
    const query = ingredients.join(',');
    const url = `${this.apiUrl}?ingredients=${query}&number=5&apiKey=${this.apiKey}`;
    return this.http.get<any[]>(url);
  }

  // Fetch detailed recipe information by recipe ID
  getRecipeDetail(id: number): Observable<any> {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}

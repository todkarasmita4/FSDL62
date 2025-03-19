import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { HomeComponent } from './home/home.component';  // Correct path
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';  // Adjust path as needed

const routes: Routes = [
  { path: '', component: HomeComponent },  // Home route
  { path: 'recipe/:id', component: RecipeDetailComponent },  // Recipe detail route with dynamic parameter 'id'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Set up the routes
  exports: [RouterModule],  // Export router to be used in the main module
})
export class AppRoutingModule {}

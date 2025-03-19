import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Import the root component
import { AppRoutingModule } from './app-routing.module';  // Import the routing module
import { HomeComponent } from './home/home.component';  // Ensure this is the correct path
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';  // Ensure this is the correct path

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeDetailComponent,  // Declare the components you want to use
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Make sure AppRoutingModule is included here
  ],
  providers: [],
  bootstrap: [AppComponent],  // Bootstrap the root component
})
export class AppModule {}

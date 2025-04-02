import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // ✅ Ensure this is imported
import { RouterModule } from '@angular/router';  // ✅ ADD THIS LINE
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // ✅ Ensure routing module is here
    RouterModule        // ✅ THIS FIXES YOUR ERROR
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

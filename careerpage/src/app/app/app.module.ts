// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';

// Import your main component (e.g., AppComponent)


@NgModule({
  // Declarations: Declare all components, directives, and pipes
  declarations: [
    
    // Add other components here
  ],

  // Imports: Import required Angular modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // Add other modules here
  ],

  // Providers: Services and other injectable dependencies
  providers: [],

  // Bootstrap: The main component to be bootstrapped when the application start
})
export class AppModule {}

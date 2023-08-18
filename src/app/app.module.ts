import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Remove the incorrect imports for the components and modules
import { RouterModule } from '@angular/router'; // Import RouterModule
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { BharatSchoolLibModule } from 'bharat-school-lib';
import { AppRoutingModule } from './app-routing.module';


// import { BharatSchoolLibModule } from 'bharat-school-lib'; // Import your library module
// import { MyProfileButtonComponent } from 'bharat-school-lib'; // Import the component from your library

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BharatSchoolLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

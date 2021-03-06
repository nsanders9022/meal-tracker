import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';
import { FormsModule } from '@angular/forms';
import { NewMealComponent } from './new-meal.component';
import { CalorieCountPipe } from './calorieCount.pipe';

@NgModule({
  imports: [ BrowserModule,
             FormsModule],
  declarations: [ AppComponent,
                  MealListComponent,
                  EditMealComponent,
                  NewMealComponent,
                  CalorieCountPipe],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

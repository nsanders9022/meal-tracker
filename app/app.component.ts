import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>My Meal Tracker</h1>

      <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>

      <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
    </div>  
  `
})

export class AppComponent {
  selectedMeal = null;

  masterMealList: Meal[] = [
    new Meal("Pancakes", "I did not add syrup", 350),
    new Meal("Salmon burger", "The buns were whole grain", 365),
    new Meal("Spaghetti and meatballs", "I drowned the pasta in tomato sauce", 600)
  ];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }
}

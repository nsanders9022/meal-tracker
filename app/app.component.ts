import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>My Meal Tracker</h1>

    <meal-list [childMealList]="masterMealList"></meal-list>
  `
})

export class AppComponent {
  selectedMeal = null;

  masterMealList: Meal[] = [
    new Meal("Pancakes", "I did not add syrup", 350),
    new Meal("Salmon burger", "The buns were whole grain", 365),
    new Meal("Spaghetti and meatballs", "I drowned the pasta in tomato sauce", 600)
  ];
}

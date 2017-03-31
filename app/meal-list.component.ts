import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <h3>Sort by calories</h3>
    <select (change)="onChange($event.target.value)">
      <option value="allMeals">All Meals</option>
      <option value="less500">Meals under 500 calories</option>
      <option value="more500">Meals 500 calories or more</option>
    </select>
    <ul>
      <li *ngFor="let currentMeal of childMealList | calorieCount:filterByCalories">
        <h3>{{currentMeal.name}}</h3>
        <p>Details: {{currentMeal.details}}</p>
        <p>Calories: {{currentMeal.calories}}</p>
        <button class="btn btn-success" (click)="editButtonClicked(currentMeal)">Edit meal</button>
      </li>
    </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  filterByCalories: string = "calorieCount"

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
}

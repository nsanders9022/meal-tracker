import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <ul>
      <li *ngFor="let currentMeal of childMealList">
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

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}

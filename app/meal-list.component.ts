import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <!-- <div class="row">
      <div class="col-sm-6"> -->
        <h2>Sort by Calories</h2>
        <select (change)="onChange($event.target.value)">
          <option value="allMeals">All Meals</option>
          <option value="less500">Meals under 500 calories</option>
          <option value="more500">Meals 500 calories or more</option>
        </select>
      <!-- </div> -->
      <!-- <div class="col-sm-6">
        <h2>Total Calories</h2>
        <h3>{{totalCalories()}}</h3>
      </div> -->
    <!-- </div> -->
    <hr>
    <h2>Meals</h2>
    <div *ngFor="let currentMeal of childMealList | calorieCount:filterByCalories">
      <h3>--- {{currentMeal.name}} ---</h3>
      <p><span class="labels"> Details:</span> {{currentMeal.details}}</p>
      <p><span class="labels"> Calories:</span> {{currentMeal.calories}}</p>
      <button class="btn btn-info" (click)="editButtonClicked(currentMeal)">Edit meal</button>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  filterByCalories: string = "calorieCount";
  calorieTotal: number = 0;

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }

  // totalCalories() {
  //   setTimeout(function() {
  //     for (var meal of this.childMealList) {
  //       this.calorieTotal += meal.calories;
  //     }
  //     return this.calorieTotal;
  //
  //   }, 1000)
  // }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h3>New Meal</h3>
    <div>
      <label>Name:</label>
      <input #newName class="form-control">
      <label>Details:</label>
      <input #newDetails class="form-control">
      <label>Calories:</label>
      <input #newCalories class="form-control">
      <button class="btn btn-primary"(click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
      var newMealToAdd: Meal = new Meal(name, details, calories);
      this.newMealSender.emit(newMealToAdd);
    }
}

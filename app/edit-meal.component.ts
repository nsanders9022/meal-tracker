import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div>
      <div *ngIf="childSelectedMeal">
        <hr>
        <h2>Edit {{childSelectedMeal.name}}</h2>
        <label>Meal Name:</label>
        <input [(ngModel)]="childSelectedMeal.name" class="form-control">
        <label>Meal Details:</label>
        <input [(ngModel)]="childSelectedMeal.details" class="form-control">
        <label>Meal Calories:</label>
        <input [(ngModel)]="childSelectedMeal.calories" class="form-control">
        <button class="btn btn-success" (click)="doneButtonClicked()">Done</button>
        <hr>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe ({
  name: "calorieCount",
  pure: false
})

export class CalorieCountPipe implements PipeTransform {
  transform(input: Meal[], desiredCalorieCount) {
    var output: Meal[] = [];
    if (desiredCalorieCount === "less500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalorieCount === "more500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  enteredReason = '';
  inputAmount = '';
  expensesList = [];

  constructor() {}

  removeItem(index) {
    this.expensesList.splice(index,1);
  }

  resetForm() {
    this.enteredReason = '';
    this.inputAmount = '';
  }

  addExpense() {
    this.expensesList.push(this.enteredReason + ' RM' + this.inputAmount);
    this.resetForm();
  }
}

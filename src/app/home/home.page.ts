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
  amountList = [];
  totalExpenses = 0;

  constructor() {}

  removeItem(index) {
    this.expensesList.splice(index,1);
    this.totalExpenses -= this.amountList[index];
    this.amountList.splice(index,1);
  }

  resetForm() {
    this.enteredReason = '';
    this.inputAmount = '';
  }

  addExpense() {
    this.expensesList.push(this.enteredReason + ' RM' + this.inputAmount);
    this.amountList.push(this.inputAmount);
    this.totalExpenses += +this.inputAmount;
    this.resetForm();
  }
}

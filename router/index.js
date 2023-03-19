import ExpenseDetails from '~~/pages/expensedetails.vue'

const routes = [
  // other routes...
  {
    path: '/expenses/:id',
    name: 'ExpenseDetails',
    component: ExpenseDetails
  }
]
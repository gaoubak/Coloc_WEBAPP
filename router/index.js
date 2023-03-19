import ExpenseDetails from '~~/composant/expensedetails.vue'
import ColocManagement from '~~/composant/colocmanagements.vue'

const routes = [
  // other routes...
  {
    path: '/expenses/:id',
    name: 'ExpenseDetails',
    component: ExpenseDetails
  },
  {
    path: '/colocmanagement',
    name: 'ColocManagement',
    component: ColocManagement
  }
]
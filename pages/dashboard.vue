<template>
    <div class="min-h-screen bg-orange-400 flex justify-center items-center">
      <!-- background shapes -->
      <div class="absolute w-60 h-60 rounded-xl bg-orange-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div class="absolute w-48 h-48 rounded-xl bg-orange-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <div class="w-40 h-40 absolute bg-orange-300 rounded-full top-0 right-12 hidden md:block"></div>
      <div class="w-20 h-40 absolute bg-orange-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
  
      <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <!-- coloc data table -->
          <table>
            <thead>
              <tr>
                <th>Coloc Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="data in colocData" :key="data.name">
                <td>{{ data.name }}</td>
                <td>{{ data.value }}</td>
              </tr>
            </tbody>
          </table>
          <!-- chart canvas -->
          <canvas id="myChart"></canvas>
          <!-- expense graphs -->
          <div class="flex flex-wrap -mx-4">
            <div v-for="(expense, index) in expenseData" :key="index" class="w-full md:w-1/2 px-4">
              <NuxtLink to="/graph" class="text-2xl font-bold my-4">{{ expense.name }}</NuxtLink>
              <canvas :id="`expenseChart-${index}`"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'Dashboard',
    data() {
      return {
        colocData: [
          { name: 'Total Expenses', value: 1500 },
          { name: 'Total Income', value: 3000 },
          { name: 'Total Savings', value: 1500 },
        ],
        expenseData: [
          {
            name: 'Rent',
            values: [300, 400, 500, 600, 700],
            labels: ['John', 'Mary', 'David', 'Sarah', 'Mark'],
          },
          {
            name: 'Utilities',
            values: [100, 150, 200, 250, 300],
            labels: ['John', 'Mary', 'David', 'Sarah', 'Mark'],
          },
          {
            name: 'Groceries',
            values: [200, 250, 300, 350, 400],
            labels: ['John', 'Mary', 'David', 'Sarah', 'Mark'],
          },
        ],
      };
    },
    mounted() {
      // create chart for total expenses
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Expenses', 'Income'],
          datasets: [
            {
              label: 'Expenses',
              data: [1500, 3000],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1,
            },
            ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
        });

        // create chart for each expense
        this.expenseData.forEach((expense, index) => {
          const ctx = document.getElementById(`expenseChart-${index}`).getContext('2d');
          const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: expense.labels,
              datasets: [
                {
                  label: expense.name,
                  data: expense.values,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        });
        },
        };
</script>


<template>
    <div class="min-h-screen bg-orange-400 flex justify-center items-center">
      <!-- background shapes -->
      <div class="absolute w-60 h-60 rounded-xl bg-orange-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div class="absolute w-48 h-48 rounded-xl bg-orange-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <div class="w-40 h-40 absolute bg-orange-300 rounded-full top-0 right-12 hidden md:block"></div>
      <div class="w-20 h-40 absolute bg-orange-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
  
      <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1>Expense Details: {{ expenseName }}</h1>
          <div>
            <h2>Expense Graphs</h2>
            <div v-for="(graph, index) in graphs" :key="index">
              <h3>{{ graph.name }}</h3>
              <canvas :id="`graph-${index}`"></canvas>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'ExpenseDetails',
  data() {
    return {
      expenseName: '',
      graphs: [
        { name: 'Expenses Over Time', values: [300, 400, 500, 600, 700] },
        { name: 'Expense Breakdown by Category', values: [200, 250, 300, 350, 400] },
        { name: 'Expense by Payment Method', values: [100, 150, 200, 250, 300] },
      ],
    };
  },
  mounted() {
    // create chart for each graph
    this.graphs.forEach((graph, index) => {
      const ctx = document.getElementById(`graph-${index}`).getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May'],
          datasets: [{
            label: '# of Votes',
            data: graph.values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true
        }
      });
    });
  }
};
</script>

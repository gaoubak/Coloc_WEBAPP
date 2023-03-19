<template>
  <div>
    <!-- Coloc info -->
    <div class="coloc-info">
      <h2 class="text-2xl font-bold">Coloc Information</h2>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{{ coloc.name }}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{{ coloc.address }}</td>
          </tr>
          <tr>
            <td>Number of residents:</td>
            <td>{{ residents.length }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="editColoc">Edit</button>
    </div>

    <!-- Residents list -->
    <div class="residents-list">
      <h2 class="text-2xl font-bold">Residents List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="resident in residents" :key="resident.id">
            <td>{{ resident.name }}</td>
            <td>{{ resident.email }}</td>
            <td>{{ resident.phone }}</td>
            <td><button @click="editResident(resident)">Edit</button></td>
          </tr>
        </tbody>
      </table>
      <button @click="addResident">Add Resident</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ColocManagement',
  data() {
    return {
      coloc: {
        name: 'My Coloc',
        address: '123 Main St.',
      },
      residents: [
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '555-555-5555',
        },
        {
          id: 2,
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          phone: '555-555-5555',
        },
      ],
    }
  },
  methods: {
    editColoc() {
      // Navigate to the edit coloc page
      this.$router.push('/coloc/edit')
    },
    editResident(resident) {
      // Navigate to the edit resident page
      this.$router.push(`/resident/${resident.id}/edit`)
    },
    addResident() {
      // Navigate to the add resident page
      this.$router.push('/resident/add')
    },
  },
}
</script>

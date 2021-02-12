<template>
  <div>
    <p>Nazwa firmy się nie wyświetla</p>
    <button @click="fetchUsers">Show users</button>
    <div class="row">
      <span class="col-4">Name</span>
      <span class="col-4">Email</span>
      <span class="col-4">Company</span>
    </div>
    <div class="row" v-for="(user, i) in users" :key="i">
      <span class="col-4">{{ user.name }}</span>
      <span class="col-4">{{ user.email }}</span>
      <span class="col-4">{{ user.company.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ex1",
  data() {
    return {
      users: [],
      header: ""
    };
  },
  methods: {
    fetchUsers() {
      let users = [];
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(allUsers => {
          users = allUsers;
        });
      this.setUsers(users);
    },
    setUsers(users) {
      const bestUsers = users.slice(0, 5);
      this.users = bestUsers;
    }
  }
};
</script>

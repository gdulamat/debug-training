<template>
  <div>
    <button @click="showText">Show text</button>
    <h4>{{ header }}</h4>
  </div>
</template>

<script>
export default {
  name: "Ex0",
  data() {
    return {
      users: [],
      header: ""
    };
  },
  created() {
    /* const headerText = "Siemanko, jutro będzie: ";
    const date = Date.now();
    const tomorowTime = this.getTomorowTime(date);
    this.header = headerText + new Date(tomorowTime); */
  },
  methods: {
    getTomorowTime(time) {
      const dayMs = 1000 * 60 * 60 * 24;
      return time + dayMs;
    },
    showText() {
      const headerText = "Siemanko, jutro będzie: ";
      const date = Date.now();
      const tomorowTime = this.getTomorowTime(date);
      this.header = headerText + new Date(tomorowTime);
    }
  }
};
</script>

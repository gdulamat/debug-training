<template>
  <div>
    <p>
      Międzynarodowa komisja programistów postanowiła rozwiązać problem
      rywalizacji czołowych frameworów wykorzysywanych na froncie. Postanowiono,
      ze najlepszym rozwiązaniem jest ten framework który ma najkrótszą nazwę.
      Jednak chcąc pozostać bardziej obiektywnymi postanowili zmierzyć ich
      długość w pixelach. Szerokość ponizszych nazw powinna się wyświetlać na
      prawo od nazwy frameworka ale coś nie działa.
    </p>
    <div v-for="(text, i) in texts" :key="i">
      <span :ref="`text${i}`">{{ text }}</span> | {{ widths[i] }} px
    </div>
  </div>
</template>

<script>
export default {
  name: "Ex2",
  data() {
    return {
      texts: ["react", "vue", "angular"],
      widths: []
    };
  },
  created() {
    for (const ref in this.$refs) {
      const width = this.$refs[ref].offsetWidth
      this.widths.push(width);
    }
  }
};
</script>

<template>
  <div class="container">
    <div>
      <Logo @click.native="clickHandler" />
      <h1 class="title">nuxt-debug</h1>
      <p>Sum {{ sum }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      counter: 0,
      sum: 0
    }
  },
  created() {
    const val = this.counter + 2
    console.log(val)
  },
  mounted() {
    const val = this.counter + 4
    console.log(val)
  },
  methods: {
    clickHandler(): void {
      const a = 1
      const b = 3
      this.sum = a + b
    },
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

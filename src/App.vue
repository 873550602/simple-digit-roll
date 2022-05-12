<template>
  <div id="app">
    <simple-digit-roll :itemWidth="10" :duration="1" :fontSize="15" :value="testData"></simple-digit-roll>
  </div>
</template>

<script>
import simpleDigitRoll from "./components/simpleDigitRoll.vue";

export default {
  name: "app",
  data() {
    return {
      testData: null
    }
  },
  components: {
    simpleDigitRoll
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

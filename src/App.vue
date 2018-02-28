<template>
  <div id="app">
    <Aesthetic/>
  </div>
</template>

<script>
import Aesthetic from './components/Aesthetic';

export default {
  name: 'App',
  components: {
    Aesthetic,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

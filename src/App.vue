<template>
  <div id="app">
    <NavigationBar/>
    <Aesthetic/>
  </div>
</template>

<script>
import Aesthetic from './components/Aesthetic';
import NavigationBar from './components/NavigationBar';

export default {
  name: 'App',
  components: {
    Aesthetic,
    NavigationBar,
  },
  created() {
    document.title = 'ａｅｓｔｈｅｔｉｃ';
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
  background-color: rgb(30, 30, 30);
}
</style>

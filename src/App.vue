<template>
  <div id="app" class="container">
    <NavigationBar/>
    <Aesthetic/>
  </div>
</template>

<script>
import Aesthetic from './components/Aesthetic';
import NavigationBar from './components/NavigationBar';
import aestheticize from './utils/aestheticizer';

export default {
  name: 'App',
  components: {
    Aesthetic,
    NavigationBar,
  },
  created() {
    document.title = aestheticize('aesthetic');
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
body {
  background-color: rgb(30, 30, 30) !important;
}
</style>

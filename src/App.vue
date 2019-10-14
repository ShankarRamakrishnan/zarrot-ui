<template>
  <div id="app">
    <header>
      <PrimaryHeader/>
      <Header/>
    </header>
    <router-view/>
  </div>
</template>

<script>
import PrimaryHeader from './components/PrimaryHeader.vue'
import Header from './components/SecondaryHeader.vue'
export default {
  name: 'App',
  components: {
    Header,
    PrimaryHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Todolist msg="TODOLIST"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Todolist from './components/Todolist.vue';

@Options({
  components: {
    Todolist,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

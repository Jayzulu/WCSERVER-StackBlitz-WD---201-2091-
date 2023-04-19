<template>
  <div id="app">
    <div :style="image"></div>
    <h1>{{ msg }}</h1>
    <h2>J Victorino G. Zulueta</h2>
    <profile></profile>
    <skills></skills>
    <education></education>
  </div>
</template>

<script>
import profile from './profile.vue';
import skills from './skills.vue';
import education from './education.vue';

export default {
  name: 'app',
  components: {
    profile,
    skills,
    education,
  },

  data() {
    return {
      msg: 'Resume/CV',
    };
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
  background-color: Gold;
}
</style>

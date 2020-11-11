<template>
  <div id="app">
    <NavBar/>
    <b-container fluid class="mt-2">
      <b-row>
        <b-col cols="0" sm="1" lg="3"></b-col>
        <b-col cols="12" sm="10" lg="6">
          <router-view/>
        </b-col>
        <b-col cols="0" sm="1" lg="3"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
     NavBar
  },
  created () {
     document.title = "Van Gemert";
  }
}
</script>

<style>
@import 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400&display=swap';
@import 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ddd;
  background-color: rgb(60, 63, 65);
}

html, body {
  background-color: rgb(60, 63, 65);
}

p {
  font-family: "Lora", serif;
}
h1 {
  font-family: "Open Sans", sans-serif;
}
h2 {
  font-family: "Open Sans", sans-serif;
}
h3 {
  font-family: "Open Sans", sans-serif;
}
h4 {
  font-family: "Open Sans", sans-serif;
}
h5 {
  font-family: "Open Sans", sans-serif;
}
h6 {
  font-family: "Open Sans", sans-serif;
}
</style>

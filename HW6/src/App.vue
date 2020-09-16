<template>
  <div id="app">
    <form-serch @getForecast="getForecast"/>
    <forecast v-if="forecast" :forecast="forecast"/>
  </div>
</template>

<script>
import FormSerch from './components/FormSerch.vue';
import Forecast from './components/Forecast';

export default {
  name: 'app',
  components: {
    FormSerch,
    Forecast
  },

  data() {
    return({
      forecast: null,
    })
  },

  methods:{
      getForecast: function (el) {
       this.forecast = el;
     }
  },
}
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

<template lang="html">
   <v-container fluid>
  <v-layout row>
    <h1>Units</h1>
    Imperial <v-switch
    label = 'Metrc'
    v-model = 'metric'

    ></v-switch>

      <v-flex xs8>
        <v-text-field
          name="input-1"
          label="Enter the city name"
          id="testing"
            @keyup.enter = 'fetchData'
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import {EventBus} from '../main';
export default {
  name:'search',
  data:()=>({
    metric:true,
    units:''

  }),
  methods:{
    fetchData:function(e){
      if(this.metric){
        this.units = 'metric';
      }else{
        this.units = 'imperial '
      }
      var app = this;
      var url = 'https://api.openweathermap.org/data/2.5/weather?q='+e.target.value+'&APPID=ca0cb90ffc6a9c1122fab4756e2f6fe5&units='+this.units;
      axios.get(url).then(function(response){
        console.log(response.data.cod)
        if(response.data.cod == 200){
            EventBus.$emit('fetchWeather',response.data);
        }

      }).catch(function(error){
        console.log(error);
      });
    }
  }
}
</script>

<style lang="css">
.v-switch{
  min-width: 100%
}
</style>

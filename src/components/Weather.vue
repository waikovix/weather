<template>
  <v-container fluid>
  <v-card v-show = 'show'>
    <v-card-title>{{weather.name}}</v-card-title>
    <v-card-content>
      {{weather.weather[0].main}}
      <br>
      {{weather.main.temp}}C
    </v-card-content>

  </v-card>
</v-container>
</template>
<script type="text/javascript">
import Icons from '@/components/Icon'
import {EventBus} from '../main';
    export default{
      conmponents:{
        'icon':Icons
      },
      name:'weather',
      data:()=>({
        weather:'',
        show:false,
        icon:''
      }),
      methods:{
        changeData(weather){
          console.log(weather);
          this.weather = weather
          this.icon = this.weather.weather[0].icon;
          this.show = true;
        }
      },
      created:function(){
        EventBus.$on('fetchWeather',(weather)=>{
          this.changeData(weather);
        })
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

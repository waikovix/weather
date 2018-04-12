<template lang="html">
    <i v-html>{{Icon}}</i>
</template>

<script>
export default {
  name:'Icon',
  data:()=>({
    icon:''
  }),
  props:['iconId'],
  computed:{
    Icon:function(){
      console.log(this.icon);
      return this.icon = '&#'+this.iconId;

    }
  }
}
</script>

<style lang="css">
</style>

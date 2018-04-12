<template lang="html">
  <v-container fluid>
    <search></search>
    <weather></weather>
  </v-container>
</template>

<script>
import Search from '@/components/Search'
import Weather from '@/components/Weather'
export default {

  components:{
    'search':Search,
    'weather':Weather

  }
}
</script>

<style lang="css">
</style>

<template>
  <div class="home">
    
   
    <Navbar msg="Welcome to Your Vue.js App"/>
    
    
  </div>
</template>

<script>

import Navbar from '../components/listUser.vue'


export default {
  name: 'Home',
  components: {
    Navbar,

  },
  computed:{
    getUser(){
      return this.$store.state.user;
    }
  }
}
</script>

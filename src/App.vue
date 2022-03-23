<template>
    
    <router-view/>
  
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@font-face {
  font-family: myfont;
  src: url("./assets/font/hk-grotesk.regular.otf");
}
body{
  font-family: myfont;
}
</style>

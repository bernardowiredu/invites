<template>
  <div id="app">
       <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">

            <ul class="uk-navbar-nav uk-padding-left">
                <li class="uk-active"><router-link to="/">Home</router-link><li>
                <li><router-link to="/about">ABOUT</router-link></li>
                <li><router-link to="/settings">SETTINGS</router-link></li>
            </ul>

        </div>
    </nav>

    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
   //font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding:10px;
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
.uk-padding-left{
  padding-left:20px;
}
</style>

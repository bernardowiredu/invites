<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
      .fade-enter-active, .fade-leave-active {
          transition-duration: 0.3s;
          transition-property: opacity;
          transition-timing-function: ease;
      }
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
     opacity: 0;
  }
</style>

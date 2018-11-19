<template>
  <h5>Hello this settings</h5>
   <div v-for="(route, index) in routes" :key="index">
           <li>{{route.path}}---
                <span :class="{active : route.path === link  }">{{route.name}}</span>
          </li>
    </div>
</template>
<script>
  import routes from '@/routes/app/sidelinks'
  export default {
     name: 'settings',
     data(){
        return{
          routes,
          link: this.$route.path
        }
     }
  }
</script>
<style lang="scss" scoped>
    .active{
        color:green;
    }
</style>

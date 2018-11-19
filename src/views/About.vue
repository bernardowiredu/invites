<template>
  <div>
    <div class="about">
      <div class="uk-alert-primary" uk-alert>
        <a class="uk-alert-close" uk-close></a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>
    </div>
    <p>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      <div style="background:#eee;padding: 20px">
          <Card :bordered="false">
              <p slot="title">{{link}}</p>
              <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          </Card>
      </div>
      {{routes.length}}
    <div v-for="(route, index) in routes" :key="index">
           <li>{{route.path}}---
                <span :class="{active : route.path === link  }">{{route.name}}</span>
          </li>
    </div>
  </div>

</template>
<script>
  import routes from '@/routes/app/sidelinks'
  export default {
     name: 'about',
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
        color:red;
    }
</style>

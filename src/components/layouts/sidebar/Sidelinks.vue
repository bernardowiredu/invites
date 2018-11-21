<template>
    <div>
       <li v-for="(barlink, index) in barlinks" :key="index" :class="{active: barlink.path === link}">
           <router-link :to="barlink.path">
               <Icon class="icon-placement" :type="barlink.icon" :size="size" />
               <span>{{barlink.name}}</span>
           </router-link>
       </li>
    </div>
</template>

<script>
    export default {
        name: "sidelinks",
        props: {
           barlinks:[Array],
           size: String
        },
        data(){
            return{
                link: this.$route.path
            }
        }
    }
</script>

<style lang="scss" scoped>
    .icon-placement{
        margin-bottom:5px;
        padding-right:10px;
        color:#bababa;
    }
    .active{
        background: #F9FAFB;
        color:#000;
        transition: all 1s;
    }
    .uk-badge{
      background:#3BC881;
      padding:5px;
      margin-top:3px;
      color:#fff;
      font-size:12px;
    }
</style>

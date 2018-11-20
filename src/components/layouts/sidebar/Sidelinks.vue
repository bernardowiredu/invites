<template>
    <div>
       <li v-for="(barlink, index) in barlinks" :key="index">
           <router-link :to="barlink.path">
               <Icon class="icon-placement" :type="barlink.icon" :size="size" />
              <span :class="{active: barlink.path === link}">{{barlink.name}}</span>
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
        color:#515a6e; /*#c1c1c1 */
    }
    .active{
        color: #000;
    }
</style>
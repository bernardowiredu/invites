<template>
    <div>
       <Layout name="Dashboard">
           <transition name="fade">
               <div v-if="!myData">
                   <Placeholder></Placeholder>
               </div>
               <div v-else>

                   <Summaries></Summaries>
                   <br>
                   <div class="uk-flex uk-flex-left">
                       <div><h4 class="uk-text-strong padding-bottom-small">Overview </h4></div>
                   </div>
                   <EventAnalytics></EventAnalytics>
                   <br>
                   <h4 class="uk-text-strong padding-bottom-small">Event Updates</h4>
                   <Tables></Tables><br>
               </div>
           </transition>
       </Layout>
    </div>
</template>

<script>
    import Summaries from '@/views/app/pages/Dashboard/Summaries/Summaries.vue'
    import Placeholder from '@/views/app/helpers/Placeholder.vue'
    import EventAnalytics from '@/views/app/pages/Dashboard/Analytics/Analytics.vue'
    import Tables from '@/views/app/pages/Dashboard/tables/Tables.vue'
    import Layout from '@/views/app/BaseLayout/Layout.vue'

    export default {
        name: "dashboard",
        components: {
             Summaries, Placeholder, EventAnalytics,Tables,Layout
        },
        data(){
          return{
             name: 'Bernard',
              myData:null
          }
        },
        mounted(){
            //For Demo purposes
            setTimeout(() => {
               this.myData = "sample data"
            }, 3000)

            this.$Message.info('Data loaded');
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
        transition-delay: .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

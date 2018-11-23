<template>
    <div>
       <div class="bs-wrapper">
        <!-- sidebar -->
         <div class="uk-visible@l">
            <Sidebar></Sidebar>
         </div>
         <!-- content holder -->
         <div class="bs-content">
            <!-- navbar -->
            <Navbar title="Dashboard"></Navbar>
            <!-- mobile nav -->
            <MobileNav title="Dashboard"></MobileNav>
              <!-- if data empty -->

               <!--<NullData-->
                    <!--image="wedding-invitation"-->
                    <!--title="No Invitation have been created"-->
                    <!--message="Create and invite friends or contacs to your events without hassle"-->
                    <!--url="/events"-->
                    <!--label="Create a new invitation"-->
                  <!--&gt;</NullData>-->
            <!-- main-content -->
             <div class="bs-content-wrapper">
                 <transition name="fade">
                     <Placeholder v-if="!myData"></Placeholder>
                     <Summaries v-else></Summaries>
                 </transition>
                 <br>
                 <div class="uk-flex uk-flex-left">
                     <div><h4 class="uk-text-strong padding-bottom-small">Overview </h4></div>
                 </div>
                 <EventAnalytics></EventAnalytics>
                 <br>
                 <h4 class="uk-text-strong padding-bottom-small">Invite Feedbacks</h4>
             </div>
         </div>
       </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/layouts/sidebar/Sidebar.vue'
    import Navbar from '@/components/navbar/Navbar.vue'
    import MobileNav from '@/components/navbar/MobileNav.vue'
    //import NullData from '@/views/app/helpers/NullData.vue'
    import Summaries from '@/views/app/pages/Dashboard/Summaries/Summaries.vue'
    import Placeholder from '@/views/app/helpers/Placeholder.vue'
    import EventAnalytics from '@/views/app/pages/Dashboard/Analytics/Analytics.vue'
    export default {
        name: "dashboard",
        components: {
            Sidebar, Navbar, MobileNav, Summaries, Placeholder, EventAnalytics
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
            }, 5000)

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

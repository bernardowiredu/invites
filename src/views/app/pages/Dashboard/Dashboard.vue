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

               <NullData
                    image="wedding-invitation"
                    title="No Invitation have been created"
                    message="Create and invite friends or contacs to your events without hassle"
                    url="/events"
                    label="Create a new invitation"
                  ></NullData>
            <!-- main-content -->
             <div class="bs-content-wrapper">
                  <!-- <Summaries></Summaries> -->
                  <Placeholder></Placeholder>
             </div>
         </div>
       </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/layouts/sidebar/Sidebar.vue'
    import Navbar from '@/components/navbar/Navbar.vue'
    import MobileNav from '@/components/navbar/MobileNav.vue'
    import NullData from '@/views/app/helpers/NullData.vue'
    // import Summaries from '@/views/app/pages/Dashboard/Summaries/Summaries.vue'
    import Placeholder from '@/views/app/helpers/Placeholder.vue'
    export default {
        name: "dashboard",
        components: {
            Sidebar, Navbar, MobileNav, NullData, Placeholder
        },
        data(){
          return{
             name: 'Bernard'
          }
        }
    }
</script>

<style scoped>

</style>

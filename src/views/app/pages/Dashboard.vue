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

            <!-- main-content -->
             <div class="bs-content-wrapper">
                   <NullData
                    image="wedding-invitation"
                    title="No Invitation have been created"
                    message="Create and invite friends or contacs to your events without hassle"
                    url="/events"
                    label="Create a new invitation"
                  ></NullData>
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
    export default {
        name: "dashboard",
        components: {
            Sidebar, Navbar, MobileNav, NullData
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

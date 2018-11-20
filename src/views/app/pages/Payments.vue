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
            <Navbar title="Payments"></Navbar>
            <!-- mobile nav -->
            <MobileNav title="Payments"></MobileNav>

            <!-- main-content -->
             <div class="bs-content-wrapper">
               <p>Hello this is content</p>
             </div>
         </div>
       </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/layouts/sidebar/Sidebar.vue'
    import Navbar from '@/components/navbar/Navbar.vue'
    import MobileNav from '@/components/navbar/MobileNav.vue'
    export default {
        name: "Payments",
        components: {
            Sidebar, Navbar, MobileNav
        }
    }
</script>
<style scoped>

</style>

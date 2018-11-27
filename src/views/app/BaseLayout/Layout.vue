<template>
    <div>
        <FloatButton></FloatButton>
        <div class="bs-wrapper">
            <!-- sidebar -->
            <div class="uk-visible@l">
                <Sidebar></Sidebar>
            </div>
            <!-- content holder -->
            <div class="bs-content">
                <!-- navbar -->
                <Navbar :title="name"></Navbar>
                <!-- mobile nav -->
                <MobileNav :title="name"></MobileNav>
                <!-- if data empty -->
                <div class="bs-content-wrapper">
                   <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '@/components/layouts/sidebar/Sidebar.vue'
    import Navbar from '@/components/navbar/Navbar.vue'
    import MobileNav from '@/components/navbar/MobileNav.vue'
    import FloatButton from '@/components/tools/FloatButton.vue'
    export default {
        name: "layout",
        components:{
            Sidebar, Navbar, MobileNav, FloatButton
        },
        props:{
            name:{
                type:String,
                required:true
            }
        }
    }
</script>

<style scoped>

</style>
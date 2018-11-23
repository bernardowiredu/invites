<template>
    <div>
        <aside class="">
            <div class="logo">
                <a style class="text-white" href="#"><Icon type="logo-sass" size="60" color="white"/></a>
            </div>
             <nav>
                 <!--sidebar links-->
                 <sidelinks :barlinks="sidebarlinks" size="25"></sidelinks>
                 <!--bottom links-->
                 <div class="bottom-links">
                     <hr style="padding:10px;">
                     <li class="padding-top-xsmall">
                         <a href="#modal-center" uk-toggle> Personal Plan <span class="uk-float-right" style="padding-right:25px;"><Icon type="ios-arrow-forward" /></span></a>
                         <span class="funds">Balance 0.00 <span class="uk-text-right uk-text-primary">&emsp;&emsp; Add funds</span></span>
                     </li>
                 </div>
             </nav>
        </aside>
    </div>
</template>

<script>
    import sidelinks from '@/components/layouts/sidebar/Sidelinks.vue'
    import sidebarlinks from '@/routes/app/sidebarlinks'
    export default {
        name: "sidebar",
        components: {
            sidelinks
        },
        data(){
            return{
                sidebarlinks,

            }
        }
    }
</script>

<style scoped>

</style>

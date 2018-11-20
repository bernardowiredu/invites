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
                     <p class="subscribed uk-text-primary"><Icon  class="icon-placement" type="md-person" size="16"/> Subscribed user</p>
                     <hr>
                     <li>
                         <a href="#modal-center" uk-toggle><Icon class="icon-placement" type="md-person" size="20" /> Personal Plan <span class="uk-float-right" type="button"><Icon type="ios-arrow-forward" /></span></a>
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
                sidebarlinks
            }
        }
    }
</script>

<style scoped>

</style>
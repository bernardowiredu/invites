<template>
    <div>
        <Layout name="Events">
            <transition name="fade">
                <EventTable :events="events" :filters="filters"></EventTable>
            </transition>
        </Layout>
    </div>
</template>

<script>

    import EventTable from '@/views/app/pages/Events/plugins/EventTable.vue'
    import Layout from '@/views/app/BaseLayout/Layout.vue'

    export default {
        name: "Event",
        components: {
            EventTable, Layout
        },
        data(){
            return{
                filters:[
                    {
                        name:'Clear',
                        value:''
                    },
                    {
                        name:'Active',
                        value:'active'
                    },
                    {
                        name:'Paused',
                        value:'paused'
                    },
                    {
                        name:'Pending',
                        value:'pending'
                    },
                    {
                        name:'Ended',
                        value:'ended'
                    }

                ],
                events: [
                    {
                        id: 1,
                        name: 'Berry Wedding',
                        date: '2018-11-26',
                        invite: '149 invited',
                        category:'Wedding',
                        active: true,
                        status: 'active',
                        color:''
                    },
                    {
                        id:2,
                        name: 'GCB Seminar',
                        date: '2018-10-09',
                        invite: '179 invited',
                        category:'Seminar',
                        active: false,
                        status: 'paused',
                        color:''
                    },
                    {
                        id:3,
                        name: 'General Meeting',
                        date: '2017-12-06',
                        invite: '129 invited',
                        category:'Meeting',
                        active: true,
                        status: 'active',
                        color:''
                    },
                    {
                        id:4,
                        name: 'Annual Meeting',
                        date: '2017-10-03',
                        invite: '109 invited',
                        category:'Wedding',
                        active: true,
                        status: 'active',
                        color:''

                    },
                    {
                        id:5,
                        name: 'Open Forum',
                        date: '2017-11-03',
                        invite: '90 invited',
                        category:'Meeting',
                        active: true,
                        status: 'active',
                        color:''
                    },
                    {
                        id:6,
                        name: 'Street Float',
                        date: '2017-11-23',
                        invite: '89 invited',
                        category:'Event',
                        active: false,
                        status: 'pending',
                        color:''
                    },
                    {
                        id:7,
                        name: 'Bank Products Fair',
                        date: '2016-10-03',
                        invite: '209 invited',
                        category:'Event',
                        active: true,
                        status: 'active',
                        color:''
                    }
                ]
            }
        },
        computed:{
            // colorGenerator:{
            //     get(){
            //         let color = this.generator
            //         return this.events.forEach(event => {
            //             event.color = color
            //         })
            //     },
            //     set(value){
            //         if(value){
            //             let color = this.generator
            //             this.events.forEach((event) => {
            //                 event.color = color
            //             })
            //         }
            //     }
            // }
        },
        methods:{
            // generator(){
            //     let letters = '0123456789ABCDEF';
            //     let color = '#';
            //     for(let i =0; i < 6; i++){
            //         color += letters[Math.floor(Math.random() * 16)];
            //     }
            //     return color
            //
            // }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

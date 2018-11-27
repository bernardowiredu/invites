<template>
   <div>
       <Layout name="Groups">
            <Groups :groups="groups"/>
       </Layout>
   </div>
</template>

<script>
    import Layout from '@/views/app/BaseLayout/Layout.vue'
    import Groups from '@/views/app/pages/Groups/plugins/GroupsTable.vue'
    export default {
        name: "Groups",
        components: {
           Layout, Groups
        },
        data(){
            return{
                groups: [
                    {
                        id:1,
                        value: 'Church',
                        label: 'church',
                        contacts: 23,
                        description:'Church Members at Atonsu'
                    },
                    {
                        id:2,
                        value: 'Members',
                        label: 'members',
                        contacts: 45,
                        description:'Members of Techhub'
                    },
                    {
                        id:3,
                        value: 'Workers',
                        label: 'workers',
                        contacts: 3,
                        description:'Workers of Republic Bank'
                    },
                    {
                        id:4,
                        value: 'Managers',
                        label: 'managers',
                        contacts: 19,
                        description:'General Branch Managers'
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div>
      <Layout name="Contacts">
                <Table :contacts="contacts" :groups="groups"></Table>
      </Layout>
    </div>
</template>

<script>
    import Layout from '@/views/app/BaseLayout/Layout.vue'
    import Table from '@/views/app/pages/Contacts/plugins/ContactsTable.vue'
    export default {
        name: "Contacts",
        components: {
            Layout, Table
        },
        data(){
            return{
                groups: [
                    {
                        value: 'All groups',
                        label: ''
                    },
                    {
                        value: 'Members',
                        label: 'members'
                    },
                    {
                        value: 'Workers',
                        label: 'workers'
                    },
                    {
                        value: 'Managers',
                        label: 'managers'
                    },
                ],
                contacts: [
                    {
                        id:1,
                        name:'Desmond Ohene',
                        mobile:'0545343660',
                        email:'Desmondkissi@gmail.com',
                        profile:'',
                        group:'members'
                    },
                    {
                        id:2,
                        name:'Nelly Sarpong',
                        mobile:'0545343660',
                        email:'sarpong@gmail.com',
                        profile:'',
                        group:'members'

                    },
                    {
                        id:3,
                        name:'Khalid Humeid',
                        mobile:'0545343660',
                        email:'Khalid@gmail.com',
                        profile:'',
                        group:''
                    },
                    {
                        id:4,
                        name:'Linda Wiafe',
                        mobile:'0545343660',
                        email:'Wiafe@gmail.com',
                        profile:'',
                        group:'workers'
                    },
                    {
                        id:5,
                        name:'Andrews Owusu',
                        mobile:'0541213571',
                        email:'Desmondkissi@gmail.com',
                        profile:'',
                        group:'managers'
                    }
                ]
            }
        }
    }
</script>
<style scoped>

</style>

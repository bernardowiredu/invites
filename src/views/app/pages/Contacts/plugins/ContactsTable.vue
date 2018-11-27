<template>
    <div>
        <br>

        <div class="uk-flex uk-flex-center uk-flex-between">
            <div>
                <div class="padding-top-medium padding-bottom-medium">
                    <Options :groups="groups" @groupFilter="filterGroup" :options="options"/>
                </div>
            </div>
            <div class="uk-visible@m">
                <Poptip v-model="poptip" class="uk-border-rounded" trigger="focus" content="content" placement="bottom">
                    <Input suffix="ios-search" class="margin-small uk-border-circle" v-model="filterText" placeholder="Search for events" size="large" style="width:300px;"/>
                    <div slot="title" class="uk-flex uk-flex-center uk-flex-between">
                        <div>Search Contacts</div>
                        <div><a @click="close">close</a></div>
                    </div>
                    <div class="api" slot="content" style="font-size:13px;">
                         <span>Searching for an event
                              try something like:
                         </span>
                        <ul>
                            <li class="table-fade">Enter the first 2-3 letters that start contact name.</li>
                        </ul>
                    </div>
                </Poptip>
            </div>
        </div>
        <Header :filterTable="filterTable" :total="total"/>
        <div class="padding-top-small">
         <Spin v-if="spinShow"></Spin>
         <div class="padding-top-small">
            <div class="uk-overflow-auto">
                <table class="uk-table uk-table-small uk-table-middle ">
                    <thead>
                    <tr>
                        <th><input class="uk-checkbox" type="checkbox" v-model="checkAll"></th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Groups</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="list-item uk-box-shadow-small" v-for="(contact, index) in filteredContacts" :key="index" @mouseover="display = index" @mouseleave="display = null" >
                        <td><input class="uk-checkbox" v-model="checked" :value="contact.id" type="checkbox"></td>
                        <td>
                            <div class="uk-flex uk-flex-left">
                                <div>
                                    <Avatar :style="{backgroundColor: '#619FE8', color: '#ffffff'}">{{contact.name | nameAcronym}}</Avatar>
                                </div>&emsp;
                                <div style="padding-top:5px;">
                                    {{contact.name}}
                                </div>
                            </div>
                        </td>
                        <td>{{contact.mobile}}</td>
                        <td class="uk-text-nowwrap table-fade">{{contact.email}}</td>
                        <td class="uk-text-nowwrap table-fade">{{contact.group}}</td>
                        <td v-if="display === index">
                            <Dropdown trigger="click" >
                                <Button type="primary" class="uk-no-border uk-box-shadow-hover-small" icon="ios-more">
                                </Button>
                                <DropdownMenu slot="list">
                                    <DropdownItem><a class="option-dropdown" @click="onDelete(contact)"> Delete</a></DropdownItem>
                                    <DropdownItem><a class="option-dropdown">Edit</a></DropdownItem>
                                    <DropdownItem><a class="option-dropdown">Assign group</a></DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </td>
                            <td v-else>
                                <ButtonGroup>
                                 <Button type="default" class="uk-no-border btn-primary-transparent" icon="ios-more"></Button>
                                </ButtonGroup>
                            </td>
                         </tr>
                     </tbody>
                    </table>
                 </div>
                <div class="uk-text-center uk-padding-small" style="font-size:15px;" v-if="filteredContacts.length === 0">
                 <Icon type="ios-alert-outline"/> No Match Found
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/views/app/pages/Contacts/plugins/TableHeader.vue'
    import Options from '@/views/app/pages/Contacts/plugins/TableOptions.vue'
    import Spin from '@/components/plugins/Spin.vue'
    export default {
        name: "contacts-table",
        components:{
           Header, Options, Spin
        },
        props:{
            contacts:{
                type:Array,
                required:true
            },
            groups:{
                type:Array,
                required:true
            }
        },
        data(){
           return{
               display:null,
               filterText:'',
               checked:[],
               filterTable:'',
               disabled:true,
               spinShow:false,
               poptip:false,
           }
        },
        computed:{
            selected() {
                return this.checked.length // checking events selected
            },
            total() {
                return this.contacts.length // Number of active events
            },
            filteredContacts() {
                let contacts = this.contacts.filter((contact) => {
                    return contact.name.toLowerCase().includes(this.filterText.toLowerCase())
                })

                if (this.filterTable === "")
                    return contacts;
                else {
                    return contacts.filter(contact => contact.group === this.filterTable)
                }
            },
            options(){

                if(this.selected >= 1){
                    return !this.disabled
                }else{
                    return this.disabled
                }
            },
            checkAll: {
                get() {
                    return this.contacts ? this.selected === this.contacts.length : false
                },
                set(value) {
                    let checked = [];
                    if (value) {
                        this.contacts.forEach((contact) =>
                            checked.push(contact.id)
                        )
                    }
                    this.checked = checked
                }

            }
        },
        filters:{
            nameAcronym(value){
                    let matches = value.match(/\b(\w)/g)
                    let acron = matches.join('')
                    return acron
            }
        },
        methods:{
            filterGroup(value){
                this.filterTable = value
            },
            onDelete(event) {
                this.$confirm('This will stop and erase your event. Contiune ? ', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    this.contacts.splice(this.contacts.indexOf(event), 1)
                    this.$Message.success('Contact has been deleted');
                    this.spinShow = !this.spinShow
                    setTimeout(() => {
                        this.spinShow = false;
                    }, 1000);


                })
            },
            close(){
                this.poptip = false;
            }
        }
    }
</script>

<style scoped>
    .list-item{
        background:#ffffff;
        padding:10px;
        border-bottom:1px solid #f5f5f5;
    }
    .table-fade{
        color:#969aaa;
    }
    .fade-enter-active, .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
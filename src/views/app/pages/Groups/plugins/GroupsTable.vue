<template>
    <div>
        <div class="uk-flex uk-flex-center uk-flex-between padding-bottom-small">
            <div>
                <Dropdown>
                    <Button class="uk-no-border uk-box-shadow-hover-small" size="large">
                        Options
                        <Icon type="ios-arrow-down"></Icon>
                    </Button>
                    <DropdownMenu slot="list">
                        <DropdownItem @click="handleSelectAll(true)">Delete</DropdownItem>
                        <DropdownItem  @click="handleSelectAll(false)">Edit</DropdownItem>
                        <DropdownItem>Sync</DropdownItem>
                        <DropdownItem>Export</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div>
                <Button type="primary" size="large" icon="md-create" uk-toggle="target: #modal-group">Add Group</Button>
            </div>
        </div>
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
                    <tr class="list-item uk-box-shadow-small" v-for="(group, index) in groups" :key="index" @mouseover="display = index" @mouseleave="display = null" >
                        <td><input class="uk-checkbox" v-model="checked" :value="group.id" type="checkbox"></td>
                        <td>
                            <div class="uk-flex uk-flex-left">
                                <div>
                                    <Avatar :style="{backgroundColor: '#619FE8', color: '#ffffff'}">{{group.value | nameAcronym}}</Avatar>
                                </div>&emsp;
                                <div style="padding-top:5px;">
                                    {{group.value}}
                                </div>
                            </div>
                        </td>
                        <td>{{group.contacts}}</td>
                        <td class="uk-text-nowwrap table-fade">{{group.description}}</td>
                        <td v-if="display === index">
                            <Dropdown trigger="click" >
                                <Button type="primary" class="uk-no-border uk-box-shadow-hover-small" icon="ios-more">
                                </Button>
                                <DropdownMenu slot="list">
                                    <DropdownItem><a class="option-dropdown"> Delete</a></DropdownItem>
                                    <DropdownItem><a class="option-dropdown">Edit</a></DropdownItem>
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
            <!--<div class="uk-text-center uk-padding-small" style="font-size:15px;" v-if="filteredContacts.length === 0">-->
                <!--<Icon type="ios-alert-outline"/> No Match Found-->
            <!--</div>-->
            <Modal modal="modal-group"/>
        </div>
    </div>
</template>

<script>
    import Modal from '@/views/app/pages/Groups/plugins/modals/Modal.vue'
    export default {
        name: "groups-table",
        components:{
            Modal
        },
        props: {
            groups:{
                type:Array,
                required:true
            }
        },
        data(){
            return{
                checked:[],
                display:null
            }
        },
        computed:{
            selected(){
                return this.checked.length // checking groups selected
            },
            checkAll: {
                get() {
                    return this.groups ? this.selected === this.groups.length : false
                },
                set(value) {
                    let checked = [];
                    if (value) {
                        this.groups.forEach((group) =>
                            checked.push(group.id)
                        )
                    }
                    this.checked = checked
                }

            }
        }
    }
</script>

<style scoped>

</style>
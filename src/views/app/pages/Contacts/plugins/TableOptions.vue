<template>
    <div>
        <Dropdown trigger="click" >
            <Button size="large" class="uk-no-border uk-box-shadow-hover-small" :disabled="options"
                    :class="{unactivated: options !== false, activated: options === false }">
                Options
                <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem>Assign Groups</DropdownItem>
                <DropdownItem>Delete Contacts</DropdownItem>
                <DropdownItem>Export Contacts</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        &emsp;
        <Dropdown trigger="click" class="padding-right-small">
            <Button icon="md-funnel" class="uk-no-border uk-border-rounded uk-box-shadow-hover-small" size="large">Filter by Groups</Button>
            <DropdownMenu slot="list" v-for="(group, index) in groups" :key="index">
                <DropdownItem><a class="filter text-black" @click="filterGroup(group.label)">{{group.value}}</a></DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Dropdown trigger="click" class="padding-right-small">
            <Button class="uk-no-border uk-border-rounded uk-box-shadow-hover-small" size="large" icon="md-download">Import Contacts</Button>
            <DropdownMenu slot="list">
                <DropdownItem><a class="filter text-black">from Google</a></DropdownItem>
                <DropdownItem><a class="filter text-black" href="#modal-full" uk-toggle>from Excel</a></DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Button type="success" class="uk-no-border uk-box-shadow-hover-small" size="large" icon="md-create" uk-toggle="target: #modal-sections">Add Contact</Button>
       <!--modal-->
        <Modal modal="modal-sections"/>
        <Imports modal="modal-full"/>
    </div>
</template>

<script>
    import Modal from '@/views/app/pages/Contacts/plugins/modals/Modal.vue'
    import Imports from '@/views/app/pages/Contacts/plugins/modals/Import.vue'
    export default {
        name: "table-options",
        components:{
            Modal, Imports
        },
        props:{
            groups:{
                type:Array,
                required:true
            },
            options:{
                type:Boolean
            }
        },
        methods:{
            filterGroup(value){
                this.$emit('groupFilter', value)
            }
        }

    }
</script>

<style scoped>
.uk-no-border{
    border:none
}
.text-black{
    color:#515a6e
}
.unactivated{
    background:#f2f6fc;
}
.activated{
    background:#ffffff;
}
</style>
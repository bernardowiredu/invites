<template>
    <div>
        <Dropdown trigger="click" >
            <Button size="large" class="uk-no-border uk-box-shadow-hover-small" :disabled="options"
                    :class="{unactivated: options !== false, activated: options === false }">
                Options
                <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem>Close events</DropdownItem>
                <DropdownItem>Open events</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        &emsp;
        <Dropdown trigger="click" class="padding-right-small">
            <Button icon="md-funnel" class="uk-no-border uk-border-rounded uk-box-shadow-hover-small" size="large">Filter events</Button>
            <DropdownMenu slot="list" v-for="(filter,index) in filters" :key="index">
                <DropdownItem><a class="filter text-black" @click="filterSorted(filter.value)">{{filter.name}}</a></DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
</template>

<script>
    export default {
        name: "table-options",
        props:{
            filters:{
                type:Array,
                required:true
            },
            options:{
                type:Boolean
            },
            disabled:{
                type:Boolean
            }
        },
        methods:{
            filterSorted(value){
                 this.$emit('sorted', value)
            }
        }
    }
</script>

<style scoped>
    .unactivated{
        background:red;
    }
    .activated{
        background:#ffffff;
    }
    .uk-no-border{
        border:none
    }
    .text-black{
        color:#515a6e
    }
</style>
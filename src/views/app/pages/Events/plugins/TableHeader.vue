<template>
    <div>
        <div class="uk-flex uk-flex-center uk-flex-between table-box">
            <div class="uk-visible@m">
                <span class="table-fade padding-right-xsmall uk-visible@m" ><Icon type="md-trending-up" /> Filters applied: </span>
                <Tag color="success" v-if="filterTable === 'active'" class="uk-text-capitalize text-weight">#{{filterTable}}</Tag>
                <Tag color="error" v-else-if="filterTable === 'pending'" class="uk-text-capitalize text-weight">#{{filterTable}}</Tag>
                <Tag color="warning" v-else-if="filterTable === 'paused'" class="uk-text-capitalize text-weight">#{{filterTable}}</Tag>
                <Tag color="error" v-else-if="filterTable === 'ended'" class="uk-text-capitalize text-weight">#{{filterTable}}</Tag>
                <Tag color="default" v-else class="uk-text-capitalize"># All events</Tag>
            </div>
            <div>
                <span class="table-fade padding-xsmall padding-right-small"> Activate event summary on hover</span>
                <i-switch size="small" @on-change="change" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "table-header",
        props: {
            runing: {
                type: Number,
            },
            filterTable:{
                type:String
            },

        },
        data(){
            return{

            }
        },
        filters: {
            pluralize: function (n) {
                return n === 1 ? 'event' : 'events'
            },

        },
        methods:{
            change(status){
                this.$emit('summary', status)
            }
        }
    }
</script>

<style scoped>
    .table-box{
        padding:15px;
        background: #ffffff;
        border-radius:0;
    }
    .text-weight{
        font-weight:500;
    }
    .table-fade{
        color:#969aaa;
    }
</style>
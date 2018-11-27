<template>
    <div>
        <div class="uk-flex uk-flex-center uk-flex-between table-box">
            <div class="uk-visible@m">
                <span class="table-fade padding-right-small"> Filtered group: </span>
                <span v-if="filterTable !== ''"><Tag color="default" style="font-size:14px;">#{{filterTable}}</Tag></span>
                <span v-else><Tag color="default" style="font-size:14px;">All groups</Tag></span>
            </div>
            <div>
                <span class="table-fade">Total Contacts: </span><span> {{total}} Contacts</span>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "table-header",
        props:{
            filterTable:{
                type:String
            },
            total:{
                type:Number
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
    .table-fade{
        color:#969aaa;
    }
</style>
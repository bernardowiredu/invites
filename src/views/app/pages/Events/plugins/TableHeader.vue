<template>
    <div>
        <div class="uk-flex uk-flex-center uk-flex-between table-box">
            <div class="uk-visible@m">
                <span class="uk-text-muted padding-right-xsmall uk-visible@m" ><Icon type="md-trending-up" /> Events running: </span>
                {{runing}} events
            </div>
            <div>
            <span class="uk-text-muted padding-right-xsmall"> <Icon type="md-funnel"></Icon> Filtered results:
            </span> {{filteredCounter}} {{filterTable}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header",
        props: {
            runing: {
                type: Number,
            },
            filteredCounter:{
                type:Number,

            },
            filterTable:{
                type:String
            }
        }
    }
</script>

<style scoped>

</style>
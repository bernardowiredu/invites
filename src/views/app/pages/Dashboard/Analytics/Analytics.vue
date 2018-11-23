<template>
    <div>
        <div class="uk-grid-small uk-grid-match uk-child-width-expand@s" uk-grid>
            <div>
                <div class="uk-section uk-padding-small">
                    <div class="uk-flex uk-flex-center uk-flex-between padding-bottom-small">
                        <div>
                            <h5 class="padding-left-small padding-top-small" style="font-size: 16px;">Total Views</h5>
                        </div>
                        <div>
                            <Select v-model="model2" style="width:100px; padding-right:5px;">
                                <Option v-for="item in events" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>

                            <Select v-model="model2" style="width:100px; padding-right:5px;">
                                <Option v-for="item in days" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </div>
                    <BarChart></BarChart>
                </div>
            </div>
            <div class="uk-width-medium@s">
                <div class="uk-section-small uk-padding-small">
                    <div class="uk-flex uk-flex-right padding-bottom-small">
                        <Tooltip content="Active Event" placement="top-start">
                            <Tag type="dot"  color="success"><span class="uk-text-muted">Current event: </span> Event 3</Tag>
                        </Tooltip>
                    </div>
                    <PieChart></PieChart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BarChart from '@/components/charts/barcharts/BarChart.vue'
    import PieChart from '@/components/charts/piecharts/PieChart.vue'
    export default {
        name: "analytics",
        components: {
             BarChart, PieChart
        },
        data(){
            return{
                events: [
                    {
                        id: 1,
                        label: 'General Meeting',
                        value: 'General Meeting'
                    },
                    {
                        id: 2,
                        label: 'Annual Meeting',
                        value: 'Annual Meeting'
                    }
                ],
                days:[
                    {
                        id: 1,
                        label: 'Today',
                        value: 'Today'
                    },
                    {
                        id: 2,
                        label: 'Yesterday',
                        value: 'Yesterday'
                    },
                    {
                        id: 3,
                        label: 'Last Week',
                        value: 'Last Week'
                    },
                    {
                        id:4,
                        label:'Last Month',
                        value:'Last Month'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.font-graph{
    font-size:13px;
}
.uk-no-border{
}
</style>
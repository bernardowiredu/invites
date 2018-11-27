<template>
    <div>
        <div class="uk-grid-small uk-grid-match uk-child-width-expand@s" uk-grid>
            <div>
                <div class="uk-section  uk-border-radius uk-padding-small">
                    <div class="uk-flex uk-flex-center uk-flex-between padding-bottom-small">
                        <div>
                            <h5 class="padding-left-small small-heading padding-top-xxsmall" style="font-size: 16px;">Total Views</h5>
                        </div>
                        <div>
                            <Select v-model="model2" style="width:150px; padding-right:5px;" placeholder="Select event">
                                <Option v-for="item in events" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>

                            <Select v-model="model2" style="width:100px; padding-right:5px;" placeholder="Period">
                                <Option v-for="item in days" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                    </div>
                    <BarChart></BarChart>
                </div>
            </div>
            <div class="uk-width-medium@s">
                <div class="uk-section-small uk-border-radius uk-padding-small">
                    <div class="uk-flex uk-flex-center uk-flex-between padding-bottom-small">
                      <div>
                          <h5 class="padding-left-small small-heading padding-top-xxsmall" style="font-size: 16px;">Feedbacks</h5>
                      </div>
                      <div>
                       <Tooltip content="Active Event" placement="top-start">
                            <Tag type="dot"  color="success"><span class="uk-text-muted">Live: </span> Event 3</Tag>
                        </Tooltip>
                      </div>
                    </div>
                    <PieChart></PieChart>
                    <hr style="border:1px solid #f6f6f6">
                    <p class="uk-text-muted padding-top-small" style="padding:10px;">
                        <Icon type="md-bulb" color="#619FE8" class="icon-placement" size="20"/> Your current event has more than one default information
                    </p>
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
                model2:'',
                events: [
                    {
                        id: 1,
                        label: 'All Events',
                        value: 'All Events'
                    },
                    {
                        id: 2,
                        label: 'General Meeting',
                        value: 'General Meeting'
                    },
                    {
                        id: 3,
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
.small-heading{
   font-weight:300;
   font-size:18px;
}
.icon-placement{
   margin-top: -5px;
}
.uk-border-radius{
    border-radius:7px;
}
</style>

<template>
    <div>
        <charts :height="350" :width="800" :chart-data="datacollection" :options="options"></charts>
    </div>
</template>

<script>
    import charts from '@/components/charts/barcharts/chart.js'
    export default {
        name: "bar-chart",
        components: {
            charts
        },
        data() {
            return {
                datacollection: null,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales:{
                        yAxes: [{
                            gridLines: {
                                display:true
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display:false
                            },
                            ticks: {
                                fontFamily: "'Roboto', sans-serif",
                            }
                        }]
                    }
                }
            }
        },
        mounted() {
            this.fillData()
        },
        methods: {
            fillData() {
                this.datacollection = {
                    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8','Day 9'],
                    datasets: [
                        {
                            label: 'Event Attendees',
                            backgroundColor: '#FFC533',
                            pointBackgroundColor:'#2FD283',
                            borderColor:'#FCCD58',
                            data: [40, 23, 34, 15, 45, 28, 30, 5, 20]
                        }
                    ]

                }

            }
        }
    }
</script>
<style scoped>

</style>

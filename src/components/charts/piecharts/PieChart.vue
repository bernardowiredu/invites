<template>
    <div>
        <charts :height="289" :width="100" :chart-data="datacollection" :options="options"></charts>
    </div>
</template>

<script>
    import charts from '@/components/charts/piecharts/chart.js'
    export default {
        name: "PieChart",
        components: {
            charts
        },
        data() {
            return {
                datacollection: null,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false,
                        position: 'bottom',
                        labels: {
                            fontFamily: "'Roboto', 'Helvetica Neue', 'Arial', sans-serif,"
                        }
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
                    labels: ['Attending', 'Not Attending'],
                    datasets: [
                        {
                            label: 'Event Attendees',
                            backgroundColor: [
                                'rgba(97, 159, 232, 0.3)',
                                '#2CBC76'
                            ],
                            fontFamily: '"Roboto", sans serif',
                            data: [40, 60]
                        }
                    ]

                }
            }
        }
    }
</script>
<style scoped>

</style>
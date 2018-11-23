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
                        display: true,
                        position: 'bottom',
                        labels: {
                            fontFamily: "'Roboto'",
                            boxWidth: 10
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
                    labels: ['Invited', 'Views', 'Attending'],
                    datasets: [
                        {
                            label: 'Event Attendees',
                            backgroundColor: [
                                'rgb(97, 159, 232)',
                                '#2CBC76'
                            ],
                            fontFamily: '"Roboto", sans serif',
                            data: [23, 47, 30]
                        }
                    ]

                }
            }
        }
    }
</script>
<style scoped>

</style>

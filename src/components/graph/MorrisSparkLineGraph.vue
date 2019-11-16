<template>
    <div id="sparkline-revenue"></div>
</template>

<script>
    export default {
        name: "MorrisSparkLineGraph",
        data: function() {
            return {
                // eslint-disable-next-line no-undef
                coba: $,
                chartObj: {}
            }
        },
        methods: {
            test: function () {
                this.chartObj = this.coba("sparkline-revenue");
                this.chartObj.sparkline([5, 5, 7, 7, 9, 5, 3, 5, 2, 4, 6, 7], {
                    type: 'line',
                    width: '99.5%',
                    height: '100',
                    lineColor: '#5969ff',
                    fillColor: '#dbdeff',
                    lineWidth: 2,
                    spotColor: undefined,
                    minSpotColor: undefined,
                    maxSpotColor: undefined,
                    highlightSpotColor: undefined,
                    highlightLineColor: undefined,
                    resize: true
                });
            }
        },
        mounted: function () {
            this.test();
        }
    }
</script>

<style scoped>

</style>
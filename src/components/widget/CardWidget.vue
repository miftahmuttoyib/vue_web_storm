<template>
    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div class="card">
            <div class="card-body">
                <h5 class="text-muted">{{title}}</h5>
                <div class="metric-value d-inline-block">
                    <h1 class="mb-1">{{displayValue}}</h1>
                </div>
                <div class="metric-label d-inline-block float-right text-success font-weight-bold">
                    <span><i class="fa fa-fw fa-arrow-up"></i></span><span>5.86%</span>
<!--                    ketika jenis valuenya non currency-->
<!--                    <span>N/A</span>-->
                </div>
            </div>
            <morris-spark-line-graph></morris-spark-line-graph>
        </div>
    </div>
</template>

<script>
    import MorrisSparkLineGraph from "@/components/graph/MorrisSparkLineGraph";
    export default {
        name: "CardWidget",
        components: {MorrisSparkLineGraph},
        props: {
            title: {
                required: true
            },
            value: {
                type: String,
                required: true
            },
            valueType: {
                type: String
            }
        },
        data: function () {
            return {
                displayValue: this.changeDisplayValue(),
            }
        },
        methods: {
            changeDisplayValue: function () {
                if (this.valueType === "CURRENCY") {
                    return "$" + this.value;
                } else {
                    return this.value;
                }
            }
        }
    }
</script>

<style scoped>

</style>
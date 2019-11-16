<template>
    <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
        <div class="card">
            <h5 class="card-header">{{title}}</h5>
            <div class="card-body">
                <morris-area-graph></morris-area-graph>
            </div>
            <div class="card-footer">
                <p class="display-7 font-weight-bold"><span class="text-primary d-inline-block">$26,000</span><span class="text-success float-right">+9.45%</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import MorrisAreaGraph from "@/components/graph/MorrisAreaGraph";
    export default {
        name: "RevenueGraph",
        components: {
            MorrisAreaGraph

        },
        data: function () {
            return {
                title: this.getTitle(),
            }
        },
        methods: {
            getTitle: function () {
                return "Total Revenue";
            }
        }
    }
</script>

<style scoped>

</style>
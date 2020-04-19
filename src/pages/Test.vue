<template>
    <div class="dashboard-wrapper">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="card">
                    <h5 class="card-header">Complaint Test</h5>
                    <div class="card-body">
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                            <linked-button :href="thisPage" @click.native="saveComplaint" text="tambah data"/>
                        </div>
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <span>{{message}}</span>
                            <pre>{{complaintData}}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LinkedButton from "@/components/button/LinkedButton";
    import {ComplaintApi} from "@/API/ComplaintApi";
    export default {
        name: "Test",
        components: {LinkedButton},
        data: function () {
            return {
                thisPage: "#/test",
                complaintData: {},
                message: "succces"
            }
        },
        methods: {
            saveComplaint() {
                let data = {
                    userId: 1,
                    apartmentId: 1,
                    problemId: 1,
                    facilitiesId: 7,
                    roomId: 7,
                    statusNo: 1,
                    dateCreate: Date()
                };
                ComplaintApi.save(data, () => {

                });
            }
        }
    }
</script>

<style scoped>

</style>
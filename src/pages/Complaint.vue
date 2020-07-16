<template>
    <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
            <div class="container-fluid dashboard-content">
                <header-content :title="title"/>
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <h5 class="card-header">Daftar {{title}}</h5>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered first">
                                        <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>User</th>
                                            <th>Date Create</th>
                                            <th>Apartment Code</th>
                                            <th>Room</th>
                                            <th>Facilities</th>
                                            <th>Problem</th>
                                            <th>Note</th>
                                            <th>Complaint Status</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(item, index) in listValueTable" v-bind:aria-valuemax="item.id" :key="index">
                                            <td>{{item.id}}</td>
                                            <td>{{item.user.name}}</td>
                                            <td>{{item.createDateString}}</td>
                                            <td>{{item.apartment.code}}</td>
                                            <td>{{item.room.name}}</td>
                                            <td>{{item.facilities.name}}</td>
                                            <td>{{item.problem.name}}</td>
                                            <td>{{item.note}}</td>
                                            <td>{{item.statusNoObj.name}}</td>
                                            <td>
                                                <div class="btn-group ml-auto">
<!--                                                    <button class="btn btn-sm btn-outline-light" @click="editData(item.id)">Edit</button>-->
                                                    <button class="btn btn-sm btn-outline-light" @click="print(index)">
                                                        <i class="fas fa-print"/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderContent from "@/components/main/content/HeaderContent";
    import {ComplaintApi} from "@/API/ComplaintApi";
    export default {
        name: "Complaint",
        components: {HeaderContent},
        props: {

        },
        data: function () {
            return {
                thisPage: "#/complaint",
                title: "Complaint",
                listValueTable: []
            }
        },
        methods: {
            editData(id) {
                if (id === "") {
                    return;
                }
            },
            print(idx) {
                let data = this.listValueTable[idx];
                var newWindow = window.open("#/spk", "_blank");
                newWindow.myDatafromParent = data;
            },
            repopulateData() {
                ComplaintApi.getAll((result) => {
                    this.listValueTable = result;
                });
            },
        },
        mounted: function() {
            this.repopulateData();
        }
    }
</script>

<style scoped>

</style>
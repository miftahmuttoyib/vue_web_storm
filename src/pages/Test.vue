<template>
    <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
            <div class="container-fluid dashboard-content">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <h5 class="card-header">Complaint Test</h5>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                                        <linked-button :href="thisPage" @click.native="saveComplaint" text="tambah data"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                        <drop-down @change.native="apartmentChange()" label="Apartment" :list-value="apartmentList" mandatory="true" v-model="complaintData.apartmentId"/>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                        <drop-down @change.native="roomChange()" label="Room" :list-value="filteredRoomList" mandatory="true" v-model="complaintData.roomId"/>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                        <drop-down @change.native="facilitiesChange()" label="Facility" :list-value="filteredFacilitiesList" mandatory="true" v-model="complaintData.facilitiesId"/>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                                        <drop-down label="Problem" :list-value="filteredProblemList" mandatory="true" v-model="complaintData.problemId"/>
                                    </div>
                                </div>
                                <div class="row">
                                    <pre>{{complaintData}}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <h5 class="card-header">Tech Test</h5>
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
                                        <tr v-for="(item, index) in complaintList" v-bind:aria-valuemax="item.id" :key="index">
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
                                                    <button v-if="item.statusNoObj.id === 2" class="btn btn-sm btn-outline-light" @click="updateStatus(index, 3)">
                                                        Serve
                                                    </button>
                                                    <button v-if="item.statusNoObj.id === 3" class="btn btn-sm btn-outline-light" @click="updateStatus(index, 4)">
                                                        Complete
                                                    </button>
                                                    <button v-if="item.statusNoObj.id === 4" class="btn btn-sm btn-outline-light" @click="updateStatus(index, 5)">
                                                        Close
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
    import LinkedButton from "@/components/button/LinkedButton";
    import {ComplaintApi} from "@/API/ComplaintApi";
    import {ProblemApi} from "@/API/ProblemApi";
    import {ApartmentApi} from "@/API/ApartmentApi";
    import {RoomApi} from "@/API/RoomApi";
    import {FacilitiesApi} from "@/API/FacilitiesApi";
    import DropDown from "@/components/input/DropDown";
    export default {
        name: "Test",
        components: {DropDown, LinkedButton},
        data: function () {
            return {
                thisPage: "#/test",
                complaintData: {
                    userId: 1,
                    apartmentId: undefined,
                    problemId: undefined,
                    facilitiesId: undefined,
                    roomId: undefined,
                    statusNo: 1,
                    dateCreate: Date()
                },
                complaintId: "6",
                updatedComplaint: {},
                message: "succces",
                apartmentList: [],
                roomList: [],
                filteredRoomList: [],
                facilitiesList: [],
                filteredFacilitiesList: [],
                problemList: [],
                filteredProblemList: [],
                complaintList: []
            }
        },
        methods: {
            apartmentChange() {
                let apartment = this.apartmentList.filter((item) => {
                    return item.id == this.complaintData.apartmentId;
                })[0];

                this.filteredRoomList = apartment.roomList;
            },
            roomChange() {
                let room = this.roomList.filter((item) => {
                    return item.id == this.complaintData.roomId;
                })[0];

                this.filteredFacilitiesList = room.facilitiesList;
            },
            facilitiesChange() {
                let facility = this.facilitiesList.filter((item) => {
                    return item.id == this.complaintData.facilitiesId;
                })[0];

                this.filteredProblemList = facility.problemList;
            },
            saveComplaint() {
                ComplaintApi.save(this.complaintData, () => {
                    this.repopulateData();
                });
            },
            updateStatus(idx, statusNo) {
                let data = this.complaintList[idx];
                ComplaintApi.updateStatus(data.id, statusNo, () => {
                    this.repopulateData();
                });
            },
            repopulateData() {
                ApartmentApi.getAll((result) => {
                    this.apartmentList = result;
                });
                RoomApi.getAll((result) => {
                    this.roomList = result;
                });
                FacilitiesApi.getAll((result) => {
                    this.facilitiesList = result;
                });
                ProblemApi.getAll((result) => {
                    this.problemList = result;
                });
                ComplaintApi.getAll((result) => {
                    this.complaintList = result;
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
<template>
    <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
            <div class="container-fluid dashboard-content">
                <header-content :title="title"/>
                <div v-if="!isAdd" class="row">
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <linked-button :href="thisPage" @click.native="addButtonClicked" text="Add New"/>
                    </div>
                </div>
                <div v-if="!isAdd" class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <h5 class="card-header">Daftar {{title}}</h5>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered first">
                                        <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Code</th>
                                            <th>Name</th>
                                            <th>Problem List</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(item, index) in listValueTable" v-bind:aria-valuemax="item.id" :key="index">
                                            <td>{{item.id}}</td>
                                            <td>{{item.code}}</td>
                                            <td>{{item.name}}</td>
                                            <td>
                                                <ul>
                                                    <li v-for="room in item.roomList" :key="room.id">{{room.name}}</li>
                                                </ul>
                                            </td>
                                            <td>
                                                <div class="btn-group ml-auto">
<!--                                                    <button class="btn btn-sm btn-outline-light" @click="editData(item.id)">Edit</button>-->
                                                    <button class="btn btn-sm btn-outline-light" @click="removeData(index)">
                                                        <i class="far fa-trash-alt"/>
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
                <div v-if="isAdd" class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <form class="needs-validation" novalidate>
                                    <div class="row">
                                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ">
                                            <input-text v-model="form.name" label="Name" mandatory="true" validation-feedback="Ops... your input just wrong! T_T"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                            <input-number v-model="form.no" mandatory="true" label="Apartment No" note="(Number Only)"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                            <drop-down v-model="form.floorId" label="Floor" mandatory="true" :list-value="floorList"/>
                                        </div>
                                        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                            <drop-down v-model="form.buildingId" label="Building" mandatory="true" :list-value="buildingList"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h5 class="card-header">Daftar {{label.room}}</h5>
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-striped table-bordered first">
                                                        <thead>
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>Name</th>
                                                            <th>
                                                                <button class="btn btn-sm btn-outline-light" data-toggle="modal" data-target="#exampleModal" @click="addData()">
                                                                    <i class="fas fa-plus"/>
                                                                </button>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr v-for="(item, index) in childDataList" v-bind:aria-valuemax="item.id" :key="index">
                                                            <td>{{item.id}}</td>
                                                            <td>{{item.name}}</td>
                                                            <td>
                                                                <div class="btn-group ml-auto">
                                                                    <button class="btn btn-sm btn-outline-light" @click="removeData(index)">
                                                                        <i class="fas fa-times"/>
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
                                    <div class="form-row">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <save-button @click.native="onSaveButtonClick"/>
                                            <button class="btn btn-space btn-secondary" @click="onCancelButton">Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Daftar Problem</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered first">
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Tambahkan</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item, index) in roomList" v-bind:aria-valuemax="item.id" :key="index">
                                        <td>{{item.id}}</td>
                                        <td>{{item.name}}</td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-light" data-dismiss="modal" @click="addToData(item)">
                                                <i class="fas fa-plus"/>
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SaveButton from "@/components/button/SaveButton";
    import InputText from "@/components/input/InputText";
    import LinkedButton from "@/components/button/LinkedButton";
    import HeaderContent from "@/components/main/content/HeaderContent";
    import DropDown from "@/components/input/DropDown";
    import {RoomApi} from "@/API/RoomApi";
    import {FloorApi} from "@/API/FloorApi";
    import {BuildingApi} from "@/API/BuildingApi";
    import {ApartmentApi} from "@/API/ApartmentApi";
    import InputNumber from "@/components/input/InputNumber";

    export default {
        name: "Apartment",
        components: {InputNumber, SaveButton, InputText, LinkedButton, HeaderContent, DropDown},
        props: {

        },
        data: function () {
            return {
                thisPage: "#/apartment",
                title: "Apartment",
                label: {
                    apartment: "apartment",
                    room: "room"
                },
                isAdd: false,
                form: {
                    name: "",
                    roomList: [],
                    floorId: "",
                    buildingId: "",
                    no: undefined
                },
                listValueTable: [],
                childDataList: [],
                roomList: [],
                floorList: [],
                buildingList: []
            }
        },
        methods: {
            addButtonClicked() {
                this.isAdd = true;
            },
            onCancelButton() {
                this.isAdd = false;
            },
            editData(id) {
                if (id === "") {
                    return;
                }
            },
            addData() {

            },
            addToData(item) {
                if (this.childDataList.filter(data => data.id === item.id).length === 0) {
                    this.childDataList.push(item);
                }
            },
            onSaveButtonClick() {
                this.form.roomList = this.childDataList;
                ApartmentApi.save(this.form, () => {
                    this.onCancelButton();
                    this.repopulateData();
                })
            },
            removeData(idx) {
                this.childDataList.splice(idx, 1);
            },
            repopulateData() {
                RoomApi.getAll((result) => {
                    this.roomList = result;
                });
                FloorApi.getAll((result) => {
                    this.floorList = result;
                });
                BuildingApi.getAll((result) => {
                    this.buildingList = result;
                });
                ApartmentApi.getAll((result) => {
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
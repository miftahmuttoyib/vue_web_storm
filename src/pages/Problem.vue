<template>
    <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
            <div class="container-fluid dashboard-content ">
                <header-content :title="title"/>
                <div v-show="!isAdd" class="row">
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <linked-button :href="thisPage" @click.native="addButtonClicked" text="Add New"/>
                    </div>
                </div>
                <div v-show="!isAdd" class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <h5 class="card-header">Daftar {{title}}</h5>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered first">
                                        <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Priority</th>
                                            <th>Working Type</th>
                                            <th>Execution Time</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(item, index) in listValueTable" v-bind:aria-valuemax="item.id" :key="index">
                                            <td>{{item.id}}</td>
                                            <td>{{item.name}}</td>
                                            <td>{{item.priority}}</td>
                                            <td>{{item.workingType}}</td>
                                            <td>{{item.executionTime}} Hari</td>
                                            <td>
                                                <div class="btn-group ml-auto">
                                                    <button class="btn btn-sm btn-outline-light" @click="editData(item.id)">Edit</button>
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
                <div v-show="isAdd" class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <form class="needs-validation" novalidate>
                                    <div class="row">
                                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ">
                                            <input-text label="Problem Description" mandatory="true" validation-feedback="Ops... your input just wrong! T_T"/>
                                        </div>
                                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ">
                                            <input-number label="Priority" mandatory="true" note="(Number Only)"/>
                                        </div>
                                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ">
                                            <input-number label="Execution Time" mandatory="true" note="(Number or Decimal)"/>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                            <drop-down label="Working Type" mandatory="true" :list-value="listValue"/>
                                        </div>
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                <button class="btn btn-space btn-primary" type="submit">Submit form</button>
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
    </div>
</template>

<script>
    import HeaderContent from "@/components/main/content/HeaderContent";
    import LinkedButton from "@/components/button/LinkedButton";
    import InputText from "@/components/input/InputText";
    import InputNumber from "@/components/input/InputNumber";
    import DropDown from "@/components/input/DropDown";
    import {ProblemApi} from "@/API/ProblemApi";

    export default {
        name: "Problem",
        components: {DropDown, InputNumber, InputText, LinkedButton, HeaderContent},
        props: {

        },
        data: function () {
            return {
                thisPage: "#/problem",
                title: "Problem",
                isAdd: false,
                listValue: [
                    {id: 1, name: "Electrical"},
                    {id: 2, name: "Mechanic/Sipil"}
                ],
                listValueTable: [
                    // {id:"1",name:"AC Tidak Dingin",priority:4,executionTime:1,workingType:"Electrical"},
                    // {id:"3",name:"Kipas AC Tidak Jalan",priority:4,executionTime:2,workingType:"Electrical"},
                    // {id:"4",name:"Lantai Pecah",priority:3,executionTime:3,workingType:"Mechanic/Sipil"},
                    // {id:"5",name:"Mesin Cuci Mati",priority:1,executionTime:1,workingType:"Electrical"},
                    // {id:"6",name:"Terminal Listrik Utama Mati",priority:1,executionTime:1,workingType:"Electrical"},
                    // {id:"7",name:"Air Kran Tidak Keluar",priority:2,executionTime:1,workingType:"Mechanic/Sipil"},
                    // {id:"8",name:"Atap Bocor",priority:1,executionTime:1,workingType:"Mechanic/Sipil"}
                ]
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
            removeData(idx) {
                this.listValueTable.splice(idx, 1);
            }
        },
        mounted: function() {
            ProblemApi.getAll((result) => {
                this.listValueTable = result;
            });
        }
    }
</script>

<style scoped>

</style>
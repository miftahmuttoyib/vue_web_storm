<template>
    <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
            <div class="container-fluid dashboard-content ">
                <header-content :title="title"/>
                <div v-if="!isAdd" class="row">
                    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                        <general-button :href="thisPage" @click.native="addButtonClicked" text="Add New"/>
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
                                            <td>{{item.workingTypeObj.name}}</td>
                                            <td>{{item.executionTime}} Hari</td>
                                            <td>
                                                <div class="btn-group ml-auto">
                                                    <button-icon-edit @click.native="editData(item.id)"/>
                                                    <button-icon-remove @click.native="removeData(index)"/>
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
                                            <input-text v-model="form.name" label="Problem Description" mandatory="true" validation-feedback="Ops... your input just wrong! T_T"/>
                                        </div>
                                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ">
                                            <input-number v-model="form.priority" label="Priority" mandatory="true" note="(Number Only)"/>
                                        </div>
                                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ">
                                            <input-number v-model="form.executionTime" label="Execution Time" mandatory="true" note="(Number or Decimal)"/>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 mb-2">
                                            <drop-down v-model="form.workingType" label="Working Type" mandatory="true" :list-value="listValue"/>
                                        </div>
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <save-button @click.native="onSaveButtonClick"/>
                                            <cancel-button :href="thisPage" @click.native="onCancelButton"/>
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
    import GeneralButton from "@/components/button/LinkedButton";
    import InputText from "@/components/input/InputText";
    import InputNumber from "@/components/input/InputNumber";
    import DropDown from "@/components/input/DropDown";
    import {ProblemApi} from "@/API/ProblemApi";
    import SaveButton from "@/components/button/SaveButton";
    import ButtonIconEdit from "@/components/button/ButtonIconEdit";
    import ButtonIconRemove from "@/components/button/ButtonIconRemove";
    import CancelButton from "@/components/button/CancelButton";

    export default {
        name: "Problem",
        components: {
            GeneralButton,
            ButtonIconRemove, CancelButton,
            ButtonIconEdit, SaveButton, DropDown, InputNumber, InputText, HeaderContent},
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
                form: {
                    name: "",
                    priority: undefined,
                    executionTime: undefined,
                    workingType: undefined
                },
                listValueTable: []
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
            onSaveButtonClick() {
                ProblemApi.save(this.form, () => {
                    this.onCancelButton();
                    this.repopulateData();
                });
            },
            removeData(idx) {
                let obj = this.listValueTable[idx];
                ProblemApi.delete(obj.id, () => {
                    this.repopulateData();
                });
            },
            repopulateData() {
                ProblemApi.getAll((result) => {
                    this.listValueTable = result;
                });
            },
            reloadPage() {
                window.location.reload();
            }
        },
        mounted: function() {
            this.repopulateData();
        }
    }
</script>

<style scoped>

</style>
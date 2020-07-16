<template>
    <div class="dashboard-wrapper">
        <div class="dashboard-ecommerce">
            <div class="container-fluid dashboard-content">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <table class="container">
                                    <tr>
                                        <td colspan="5" class="center" height="60">APARTEMEN JAKARTA</td>
                                    </tr>
                                    <tr class="bold-bottom">
                                        <td colspan="2" width="40%" height="60" class="center">Surat Kerja</td>
                                        <td width="15%"></td>
                                        <td colspan="2" class="center">No.0001</td>
                                    </tr>
                                    <tr>
                                        <td width="15%">Tanggal/Jam</td>
                                        <td colspan="3">: {{createDate}}</td>
                                        <td rowspan="4" class="center" width="20%">MANAJEMEN</td>
                                    </tr>
                                    <tr>
                                        <td>Unit</td>
                                        <td colspan="3">: {{unit}}</td>
                                    </tr>
                                    <tr>
                                        <td>Nama Tenant</td>
                                        <td colspan="3">: {{user}}</td>
                                    </tr>
                                    <tr>
                                        <td>Keterangan Komplain</td>
                                        <td colspan="3">: {{detailComplaintLoc}}</td>
                                    </tr>
                                    <tr class="bold-tb">
                                        <td colspan="5" height="60" class="center">Keterangan Pekerjaan</td>
                                    </tr>
                                    <tr class="bold-tb">
                                        <td class="uraian">Uraian</td>
                                        <td class="uraian" colspan="4">: {{note}}</td>
                                    </tr>
                                    <tr>
                                        <td class="bold-bottom" rowspan="2">Nama Teknisi</td>
                                        <td class="bold-bottom" rowspan="2" colspan="3">
                                            <span v-if="technicianList.length === 0">:</span>
                                            <div v-else v-for="(item, index) in technicianList" v-bind:aria-valuemax="item.id" :key="index">
                                                : {{item.name}} ({{item.position}})
                                            </div>
                                        </td>
                                        <td class="bold-lr">Paraf Teknisi</td>
                                    </tr>
                                    <tr>
                                        <td class="bold-lr bold-bottom" height="80"> </td>
                                    </tr>
                                    <tr>
                                        <td class="bold-left" colspan="2">Mulai</td>
                                        <td class="bold-left" colspan="2">Selesai</td>
                                        <td class="bold-lr">Paraf Manajemen</td>
                                    </tr>
                                    <tr>
                                        <td>Tgl Pekerjaan</td>
                                        <td>:</td>
                                        <td class="bold-left">Tgl Pekerjaan</td>
                                        <td>:</td>
                                        <td class="bold-lr" rowspan="2"></td>
                                    </tr>
                                    <tr>
                                        <td>Jam Pekerjaan</td>
                                        <td>:</td>
                                        <td class="bold-left">Jam Pekerjaan</td>
                                        <td>:</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Spk",
        data: function() {
            return {
                createDate: "",
                unit: "",
                user: "",
                detailComplaintLoc: "",
                note: "",
                technicianList: [],

            }
        },
        methods: {
            fromatCreateDate(milisecond) {
                let myDate = new Date(milisecond);
                let dd = myDate.getDate();
                if (dd < 10) {
                    dd = "0" + dd;
                }
                let mm = myDate.getUTCMonth();
                if (mm < 10) {
                    mm = "0" + mm;
                }
                let yyyy = myDate.getFullYear();
                let hh = myDate.getHours();
                if (hh < 10) {
                    hh = "0" + hh;
                }
                let min = myDate.getMinutes();
                if (min < 10) {
                    min = "0" + min;
                }
                let sec = myDate.getSeconds();
                if (sec < 10) {
                    sec = "0" + sec;
                }

                this.createDate = yyyy + "-" + mm + "-" + dd + " " + hh + ":" + min + ":" + sec;
            }
        },

        mounted: function() {
            let d = window.myDatafromParent;
            this.fromatCreateDate(d.createDate);
            this.unit = d.apartment.name;
            this.user = d.user.name;
            this.detailComplaintLoc =   d.room.name + " -> " +
                                        d.facilities.name + " -> " +
                                        d.problem.name + " ("+ d.problem.workingTypeObj.name + " - " + d.problem.manpower + " Orang" + ")";
            this.technicianList = d.technicianList;
            // this.remark = d.remark;
        }
    }
</script>

<style scoped>
    table {
        color: #000;
        border: 3px solid #000;
    }

    .container {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 1000px;
    }

    .bold-lr {
        border-left: 3px solid #000;
        border-right: 3px solid #000;
    }

    td {
        border: 2px solid #000;
        padding: 8px;
    }

    .container th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
    }

    .center {
        text-align: center;
    }

    .bold-left {
        border-left: 3px solid #000;
    }

    .bold-bottom {
        border-bottom: 3px solid #000;
    }

    .bold-tb {
        border-bottom: 3px solid #000;
        border-top: 3px solid #000;
    }

    .uraian {
        height: 320px;
        text-align: left;
        vertical-align: top;
        border: none;
    }

    .dashboard-wrapper {
        width: 85%;
        margin-top: -60px;
        margin-left: 0;
    }

    .card-body {
        padding-left: 0;
        padding-right: 0;
    }
</style>
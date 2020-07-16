/* eslint-disable no-undef */
import {AppConfig} from "@/app-config";
import {ZavieraLib} from "@/assets/libs/js/zaviera-lib";

export class ComplaintApi {
    static getAll(resultData) {
        return $.ajax({
            url: AppConfig.appUrl + "complaint/get/all",
            type: "GET",
            success: function (result) {
                ZavieraLib.convertComplaintStatusToObj(result);
                result.forEach(item => {
                    ZavieraLib.convertWorkingTypeToObj(item.problem);
                    item.createDateString = ZavieraLib.toDateTime(new Date(item.createDate));
                });
                resultData(result);
            },
            error: function (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            }
        });
    }

    static get(id, resultData) {
        return $.ajax({
            url: AppConfig.appUrl + "complaint/get/spk" + AppConfig.parseParam([id]),
            type: "GET",
            success: function (result) {
                resultData(result);
            },
            error: function (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            }
        });
    }

    static updateStatus(id, statusNo, resultData) {
        return $.ajax({
            url: AppConfig.appUrl + "complaint/get/update/status" + AppConfig.parseParam([id, statusNo]),
            type: "GET",
            success: function (result) {
                ComplaintApi.mapIdToObj(result);
                resultData(result);
            },
            error: function (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            }

        });
    }

    static startWorking(id, resultData) {
        return $.ajax({
            url: AppConfig.appUrl + "complaint/get/update/status" + AppConfig.parseParam([id]),
            type: "GET",
            success: function (result) {
                ComplaintApi.mapIdToObj(result);
                resultData(result);
            },
            error: function (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            }
        });
    }

    static mapIdToObj(result) {
        ZavieraLib.convertComplaintStatusToObj(result);
        ZavieraLib.convertWorkingTypeToObj(result.problem);
    }

    static save(data, onSuccess) {
        return $.ajax({
            url: AppConfig.appUrl + "complaint/save",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (success) {
                onSuccess(success);
            }
        })
    }
}
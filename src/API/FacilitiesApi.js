/* eslint-disable no-undef */
import {AppConfig} from "@/app-config";
import {ZavieraLib} from "@/assets/libs/js/zaviera-lib";

export class FacilitiesApi {
    static getAll(resultData) {
        return $.ajax({
            url: AppConfig.appUrl + "facilities/get/all",
            type: "GET",
            success: function (result) {
                ZavieraLib.convertFacilitiesTypeToObj(result);
                resultData(result);
            },
            error: function (error) {
                // eslint-disable-next-line no-console
                console.log(error);
            }
        });
    }

    static save(data, onSuccess) {
        return $.ajax({
            url: AppConfig.appUrl + "facilities/save",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (success) {
                onSuccess(success);
            }
        })
    }

    static delete(id, onSuccess) {
        return $.ajax({
            url: AppConfig.appUrl + "facilities/delete" + AppConfig.parseParam([id]),
            type: "DELETE",
            success: function (success) {
                onSuccess(success);
            }
        })
    }
}
/* eslint-disable no-undef */
import {AppConfig} from "@/app-config";

export class FloorApi {
    static getAll(resultData) {
        return $.ajax({
            url: AppConfig.appUrl + "floor/get/all",
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

    static save(data, onSuccess) {
        return $.ajax({
            url: AppConfig.appUrl + "floor/save",
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
            url: AppConfig.appUrl + "floor/delete" + AppConfig.parseParam([id]),
            type: "DELETE",
            success: function (success) {
                onSuccess(success);
            }
        })
    }
}
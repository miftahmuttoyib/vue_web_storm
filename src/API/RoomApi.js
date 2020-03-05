/* eslint-disable no-undef */
import {AppConfig} from "@/app-config";

export class RoomApi {
    static getAll(resultData) {
        return $.ajax({
            url: AppConfig.appUrl + "room/get/all",
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
            url: AppConfig.appUrl + "room/save",
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
            url: AppConfig.appUrl + "room/delete" + AppConfig.parseParam([id]),
            type: "DELETE",
            success: function (success) {
                onSuccess(success);
            }
        })
    }
}
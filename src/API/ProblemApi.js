/* eslint-disable no-undef */
import {AppConfig} from "@/app-config";

export class ProblemApi {
    static getAll(resultData) {
        return $.ajax({
            url: AppConfig.appUrl + "problem/get/all",
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
}
export class ZavieraLib {
    static workingType = [
        {id: 1, name: "Electrical"},
        {id: 2, name: "Mechanic/Sipil"}
    ];

    static complaintStatus = [
        {id: 1, name: "In Queue"},
        {id: 2, name: "Pending"},
        {id: 3, name: "Being Worked"},
        {id: 4, name: "Finish"},
        {id: 5, name: "Complete"}
    ];

    static recreateObj(obj, varParamName, varObjName, mapper) {
        for (let i = 0; i < mapper.length; i++) {
            if (obj[varParamName] == i+1) {
                obj[varObjName] = mapper[i];
                return;
            }
        }
    }

    static convertTypeToObj(obj, varParamName, varObjName, mapper) {
        if (obj instanceof Array) {
            obj.forEach(item => {
                this.recreateObj(item, varParamName, varObjName, mapper);
            });
        } else {
            this.recreateObj(obj, varParamName, varObjName, mapper)
        }
    }

    static convertWorkingTypeToObj(obj) {
        this.convertTypeToObj(obj, 'workingType', 'workingTypeObj', this.workingType);
    }

    static convertFacilitiesTypeToObj(obj) {
        this.convertTypeToObj(obj, 'facilitiesType', 'facilitiesTypeObj', this.workingType)
    }

    static convertComplaintStatusToObj(obj) {
        this.convertTypeToObj(obj, "statusNo", "statusNoObj", this.complaintStatus)
    }

    static toDateTime(dateObj) {
        if (dateObj instanceof Date) {
            return this.getDate(dateObj) + " " + this.getTime(dateObj);

        }
        return "";
    }

    static getDate(dateObj) {
        if (dateObj instanceof Date) {
            return dateObj.getFullYear() + "-" +
                (dateObj.getMonth() < 10 ? "0" + dateObj.getMonth() : dateObj.getMonth()) + "-" +
                (dateObj.getDate() < 10 ? "0" + dateObj.getDate() : dateObj.getDate());
        }
        return "";
    }

    static getTime(dateObj) {
        if (dateObj instanceof Date) {
            return (dateObj.getHours() < 10 ? "0" + dateObj.getHours() : dateObj.getHours()) + ":" +
            (dateObj.getMinutes() < 10 ? "0" + dateObj.getMinutes() : dateObj.getMinutes()) + ":" +
            (dateObj.getSeconds() < 10 ? "0" + dateObj.getSeconds() : dateObj.getSeconds());
        }
        return "";
    }
}
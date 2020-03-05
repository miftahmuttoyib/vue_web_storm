Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
Array.prototype.remove = function (key, value) {
    const index = this.findIndex(obj => obj[key] === value);
    return index >= 0 ? [
        ...this.slice(0, index),
        ...this.slice(index + 1)
    ] : this;
};


export class ZavieraLib {
    static workingType = [
        {id: 1, name: "Electrical"},
        {id: 2, name: "Mechanic/Sipil"}
    ];

    static recreateObj(obj, varParamName, varObjName) {
        if (obj[varParamName] === "1") {
            obj[varObjName] = this.workingType[0];
        } else {
            obj[varObjName] = this.workingType[1];
        }
    }

    static convertTypeToObj(obj, varParamName, varObjName) {
        if (obj instanceof Array) {
            obj.forEach(item => {
                this.recreateObj(item, varParamName, varObjName);
            });
        } else {
            this.recreateObj(obj, varParamName, varObjName)
        }
    }

    static convertWorkingTypeToObj (obj) {
        this.convertTypeToObj(obj, 'workingType', 'workingTypeObj');
    }

    static convertFacilitiesTypeToObj (obj) {
        this.convertTypeToObj(obj, 'facilitiesType', 'facilitiesTypeObj')
    }
}
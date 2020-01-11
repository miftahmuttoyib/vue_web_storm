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
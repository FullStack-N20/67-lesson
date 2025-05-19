var MinNumber = function (arr) {
    if (arr.length === 0) {
        return -1;
    }
    return Math.min.apply(Math, arr);
};
var SumString = function (arr) {
    var result = '';
    arr.map(function (str) {
        result += str + ',';
    });
    result.endsWith(',');
    return result;
};

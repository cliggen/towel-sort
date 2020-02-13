
// You should implement your task here.

module.exports = function towelSort(matrix) {
    var final = [];
    if (typeof matrix != "undefined" && matrix != null && matrix.length != null
        && matrix.length > 0) {
        for (i = 0; i < matrix.length; i++) {
            if (i % 2 != 0) {
                for (j = matrix[i].length; j >= 0; j--) {
                    final.push(matrix[i][j]);
                }
            } else if (i % 2 == 0) {
                for (j = 0; j < matrix[i].length; j++) {
                    final.push(matrix[i][j]);
                }
            }
        }
        return final.filter(x => (x != undefined));
    }
    return final;
}

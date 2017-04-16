var Ddv;
(function (Ddv) {
    var Sudoku;
    (function (Sudoku) {
        var Models;
        (function (Models) {
            var ReferenceNode = (function () {
                function ReferenceNode(row, column, block) {
                    this.row = row;
                    this.block = block;
                    this.column = column;
                }
                return ReferenceNode;
            }());
            Models.ReferenceNode = ReferenceNode;
        })(Models = Sudoku.Models || (Sudoku.Models = {}));
    })(Sudoku = Ddv.Sudoku || (Ddv.Sudoku = {}));
})(Ddv || (Ddv = {}));
//# sourceMappingURL=ReferenceNode.js.map
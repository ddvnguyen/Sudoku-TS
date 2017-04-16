var Ddv;
(function (Ddv) {
    var Sudoku;
    (function (Sudoku) {
        var Directive;
        (function (Directive) {
            var BoardDrawDirective = (function () {
                function BoardDrawDirective() {
                    this.restrict = "E";
                    this.templateUrl = "/App/Directives/BoardDrawDirective.html";
                    this.scope = {
                        sudokuData: "=",
                        sudokuResult: "=?"
                    };
                    this.link = function ($scope, element, attrs) {
                        console.warn("BoardDrawDirective link", $scope.sudokuData, $scope.sudokuResult);
                        //if ($scope.sudokuResult === undefined || $scope.sudokuResult === null)
                        //{
                        //    console.warn("Sudoku Qestion mode");
                        //    $scope.sudokuResult = $scope.sudokuData;
                        //}
                        $scope.clickCell = function (row, column) {
                            alert("click cell:" + row + "|" + column);
                        };
                    };
                    console.warn("BoardDrawDirective constructor");
                }
                return BoardDrawDirective;
            }());
            BoardDrawDirective.ngName = "boardDraw";
            Directive.BoardDrawDirective = BoardDrawDirective;
            angular
                .module("Sudoku")
                .directive(BoardDrawDirective.ngName, Sudoku.Core.DirectiveBuild(BoardDrawDirective, []));
        })(Directive = Sudoku.Directive || (Sudoku.Directive = {}));
    })(Sudoku = Ddv.Sudoku || (Ddv.Sudoku = {}));
})(Ddv || (Ddv = {}));
//# sourceMappingURL=BoardDrawDirective.js.map
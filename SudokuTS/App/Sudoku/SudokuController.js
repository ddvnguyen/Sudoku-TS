var Ddv;
(function (Ddv) {
    var Sudoku;
    (function (Sudoku) {
        var Controller;
        (function (Controller) {
            var SudokuController = (function () {
                function SudokuController($scope, sudokuService) {
                    this.$scope = $scope;
                    this.sudokuService = sudokuService;
                    console.warn("SudokuController constructor");
                    var sudoku12 = [
                        [8, 12, 4, 0, 0, 10, 0, 0, 2, 0, 0, 5],
                        [0, 0, 0, 6, 0, 12, 4, 0, 0, 7, 0, 3],
                        [0, 3, 0, 0, 0, 0, 6, 5, 0, 0, 0, 9],
                        [7, 0, 0, 0, 9, 4, 0, 2, 0, 0, 10, 0],
                        [0, 0, 5, 4, 0, 0, 0, 0, 1, 0, 0, 0],
                        [0, 6, 10, 0, 0, 0, 0, 0, 12, 0, 9, 2],
                        [1, 7, 0, 3, 0, 0, 0, 0, 0, 9, 4, 0],
                        [0, 0, 0, 2, 0, 0, 0, 0, 5, 10, 0, 0],
                        [0, 11, 0, 0, 12, 0, 9, 4, 0, 0, 0, 8],
                        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    ];
                    $scope.sudokuData =
                        [
                            [0, 0, 6, 0, 3, 0, 0, 0, 0],
                            [4, 0, 7, 1, 0, 0, 0, 2, 6],
                            [0, 8, 0, 2, 5, 0, 7, 4, 1],
                            [2, 6, 3, 7, 0, 8, 5, 0, 4],
                            [0, 4, 0, 0, 0, 0, 0, 0, 0],
                            [5, 0, 1, 6, 0, 3, 2, 7, 8],
                            [9, 7, 4, 0, 6, 5, 0, 3, 0],
                            [8, 3, 0, 0, 0, 1, 4, 0, 7],
                            [0, 0, 0, 0, 7, 0, 9, 0, 0]
                        ];
                    //var result = this.sudokuService.solveSUDOKU($scope.sudokuData);
                    var result = this.sudokuService.solveSudokuNew($scope.sudokuData, 3, 3, 3, 3);
                    $scope.sudokuResult = result;
                    console.warn(result);
                }
                return SudokuController;
            }());
            SudokuController.ngName = "SudokuController";
            SudokuController.$inject = ["$scope", Sudoku.Service.SudokuService.ngName];
            Controller.SudokuController = SudokuController;
            angular
                .module("Sudoku")
                .controller(SudokuController.ngName, SudokuController);
        })(Controller = Sudoku.Controller || (Sudoku.Controller = {}));
    })(Sudoku = Ddv.Sudoku || (Ddv.Sudoku = {}));
})(Ddv || (Ddv = {}));
//# sourceMappingURL=SudokuController.js.map
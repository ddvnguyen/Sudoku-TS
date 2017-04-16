var Ddv;
(function (Ddv) {
    var Sudoku;
    (function (Sudoku) {
        var Core;
        (function (Core) {
            routeConfig.$inject = ["$routeProvider"];
            function routeConfig($routeProvider) {
                $routeProvider
                    .when("/SudokuController", {
                    templateUrl: "/App/Sudoku/SudokuController.html",
                    controller: "SudokuController as vm"
                })
                    .otherwise("/SudokuController");
            }
            function DirectiveBuild(a, inject) {
                var directive = function () { return new a(); };
                directive.$inject = inject;
                return directive;
            }
            Core.DirectiveBuild = DirectiveBuild;
            angular
                .module("Sudoku", ["ui.bootstrap", "ngRoute"])
                .config(routeConfig);
        })(Core = Sudoku.Core || (Sudoku.Core = {}));
    })(Sudoku = Ddv.Sudoku || (Ddv.Sudoku = {}));
})(Ddv || (Ddv = {}));
//# sourceMappingURL=module.js.map
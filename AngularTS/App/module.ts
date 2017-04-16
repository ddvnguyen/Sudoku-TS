module Ddv.Sudoku.Core
{
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void
    {
        $routeProvider
            .when("/SudokuController",
            {
                templateUrl: "/App/Sudoku/SudokuController.html",
                controller: "SudokuController as vm"
            })
            .otherwise("/SudokuController");
    }

    export function DirectiveBuild(a: any, inject: string[])
    {
        const directive = () => new a();
        directive.$inject = inject;
        return directive;
    }


    angular
        .module("Sudoku", ["ui.bootstrap","ngRoute"])
        .config(routeConfig);

}
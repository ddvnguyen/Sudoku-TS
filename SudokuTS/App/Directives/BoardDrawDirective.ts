module Ddv.Sudoku.Directive
{
    export interface IBoardDraw extends ng.IScope
    {
        sudokuData: number[][];
        sudokuResult: number[][];

        clickCell: (row:number,column:number) =>void
        openCell: number;
    }

    export class BoardDrawDirective implements ng.IDirective
    {
        static ngName = "boardDraw";
        restrict = "E";
        templateUrl = "/App/Directives/BoardDrawDirective.html";
        scope =
        {
            sudokuData: "=",
            sudokuResult: "=?"
        };

        constructor()
        {
            console.warn("BoardDrawDirective constructor")
        }

        link = ($scope: IBoardDraw, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) =>
        {
            console.warn("BoardDrawDirective link", $scope.sudokuData, $scope.sudokuResult);
            //if ($scope.sudokuResult === undefined || $scope.sudokuResult === null)
            //{
            //    console.warn("Sudoku Qestion mode");
            //    $scope.sudokuResult = $scope.sudokuData;
            //}

            $scope.clickCell = (row: number, column: number)=>
            {
                alert("click cell:"+ row +"|"+ column);
            }
        }

    }

    angular
        .module("Sudoku")
        .directive(BoardDrawDirective.ngName, Sudoku.Core.DirectiveBuild(BoardDrawDirective,[]))

}
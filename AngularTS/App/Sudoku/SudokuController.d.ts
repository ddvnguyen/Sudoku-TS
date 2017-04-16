declare module Ddv.Sudoku.Controller {
    interface ISudokuController {
    }
    class SudokuController {
        private sudokuService;
        static ngName: string;
        static $inject: string[];
        constructor(sudokuService: Sudoku.Service.SudokuService);
    }
}

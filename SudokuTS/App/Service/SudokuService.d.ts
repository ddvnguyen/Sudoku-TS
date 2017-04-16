declare module Ddv.Sudoku.Service {
    class SudokuService {
        static ngName: string;
        constructor();
        solveSUDOKU: (data: number[][]) => number[][];
        private getAvailableForCell;
    }
}

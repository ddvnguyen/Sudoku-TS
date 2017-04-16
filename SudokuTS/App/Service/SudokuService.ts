module Ddv.Sudoku.Service
{
    export class SudokuService
    {
        static ngName = "SudokuService"



        constructor()
        {
            console.warn("SudokuService constructor")
            //this.buildReferenceTable(3, 2);
            this.referenceTable(3, 2, 2, 3);
        }

        public solveSUDOKU = (data: number[][]) =>
        {
            var counterB = 0;
            var C: number[] = new Array();
            var FIX = new Array();
            var RF = new Array();
            var AvailableArray: number[][] = new Array();
            var referenceFrame =
                "111 112 113 124 125 126 137 138 139 " +
                "211 212 213 224 225 226 237 238 239 " +
                "311 312 313 324 325 326 337 338 339 " +
                "441 442 443 454 455 456 467 468 469 " +
                "541 542 543 554 555 556 567 568 569 " +
                "641 642 643 654 655 656 667 668 669 " +
                "771 772 773 784 785 786 797 798 799 " +
                "871 872 873 884 885 886 897 898 899 " +
                "971 972 973 984 985 986 997 998 999";
            var referenceFrameTemp = "";
            for (var i = 0; i < 9; i++)
            {
                for (var j = 0; j < 3; j++)
                {
                    for (var k = 0; k < 3; k++)
                    {
                        if (data[i][j * 3 + k] > 0)
                        {
                            //C.push(parseInt(data[i][j*0+k])));
                            C.push(data[i][j * 3 + k]);
                            FIX.push(true);
                        }
                        else
                        {
                            C.push(0);
                            FIX.push(false);
                        }

                        referenceFrameTemp = "";
                        referenceFrameTemp = referenceFrame.charAt(counterB) + referenceFrame.charAt(counterB + 1) + referenceFrame.charAt(counterB + 2);
                        RF.push(referenceFrameTemp);
                        counterB = counterB + 4;
                    }
                }
            }

            var resultX;
            var RunCounter = 0;
            var RealIndex = new Array;

            for (var index = 0; index < 81; index++)
            {
                resultX = 0;

                if (C[index] == 0)
                {
                    if (RealIndex[index] == null)
                    {
                        RealIndex[index] = 0;
                    }
                    resultX = this.getAvailableForCell(index, RF[index], RF, C, AvailableArray, RealIndex, FIX);
                }

                if (resultX > 0)
                {
                    index = index - (1 + resultX);
                    RealIndex[index + 1]++;
                }
                RunCounter++;
            }

            //console.log("C", C)
            var sudokuResult: number[][] = [];
            for (var i = 0; i < 9; i++)
            {
                sudokuResult[i] = [];
                for (var j = 0; j < 9; j++)
                {
                    console.log("C at ", C[i * 9 + j])
                    sudokuResult[i][j] = C[i * 9 + j];
                }
            }
            return sudokuResult;
        }

        public solveSudokuNew = (data: number[][], wSmall: number, hSmall: number, wBig: number, hBig: number) =>
        {
            //var counterB = 0;
            var C: number[] = new Array();
            var FIX = new Array();
            var RF = new Array();
            var AvailableArray: number[][] = new Array();

            var referenceFrameTemp = "";

            for (var hb = 0; hb < hBig; hb++)
                for (var wb = 1; wb <= wBig; wb++)
                    for (var hs = 0; hs < hSmall; hs++)
                        for (var ws = 1; ws <= wSmall; ws++)
                        {
                            var row = wb + hb * wBig;
                            var col = hs * wSmall + ws;
                            var block = hs + 1 + hb * wBig
                            //console.log(row, col, block);

                            var referenceNode: Models.ReferenceNode = new Models.ReferenceNode(row, col, block);
                            //console.log(referenceNode);

                            if (data[row - 1][col - 1] > 0)
                            {
                                C.push(data[row - 1][col - 1]);
                                FIX.push(true);
                            }
                            else
                            {
                                C.push(0);
                                FIX.push(false);
                            }

                            RF.push(referenceNode.row.toString() + referenceNode.block.toString() + referenceNode.column.toString());
                        }

            console.warn("RF", RF);

            var resultX;
            var RunCounter = 0;
            var RealIndex = new Array;

            for (var index = 0; index < 81; index++)
            {
                resultX = 0;

                if (C[index] === 0)
                {
                    if (RealIndex[index] === null || RealIndex[index] === undefined)
                    {
                        RealIndex[index] = 0;
                    }
                    resultX = this.getAvailableForCell(index, RF[index], RF, C, AvailableArray, RealIndex, FIX);
                }

                if (resultX > 0)
                {
                    index = index - (1 + resultX);
                    RealIndex[index + 1]++;
                }
                RunCounter++;
            }

            //console.log("C", C)
            var sudokuResult: number[][] = [];
            for (var i = 0; i < 9; i++)
            {
                sudokuResult[i] = [];
                for (var j = 0; j < 9; j++)
                {
                    //console.log("C at ", C[i * 9 + j])
                    sudokuResult[i][j] = C[i * 9 + j];
                }
            }
            return sudokuResult;
        }

        private getAvailableForCell = (index, Reference, RF, C: number[], AvailableArray: number[][], RealIndex: number[], FIX) =>
        {
            console.log("Reference", Reference);
            var result = 0;
            var TempListR: number[] = new Array(); //TempListR = [];
            var TempListB: number[] = new Array(); //TempListB = [];
            var TempListC: number[] = new Array(); //TempListC = [];
            var Row = Reference.toString().charAt(0);
            var Block = Reference.toString().charAt(1);
            var Colume = Reference.toString().charAt(2);
            AvailableArray[index] = [];

            for (var i = 0; i < 81; i++)
            {
                if (RF[i] != Reference)
                {
                    if ((RF[i].charAt(0)) == Row) 
                    {
                        if (C[i] != 0)
                            TempListR.push(C[i]);
                    }

                    if ((RF[i].charAt(1)) == Block)
                    {
                        if (C[i] != 0)
                            TempListB.push(C[i]);
                    }

                    if ((RF[i].charAt(2)) == Colume)
                    {
                        if (C[i] != 0)
                            TempListC.push(C[i]);
                    }
                }
            }

            for (var i = 1; i < 10; i++)
            {
                if ((TempListC.indexOf(i) === -1) &&
                    (TempListB.indexOf(i) === -1) &&
                    (TempListR.indexOf(i) === -1))
                {
                    AvailableArray[index].push(i);
                }
            }

            console.log("AvailableArray", AvailableArray[index]);

            if (AvailableArray[index].length === 0)
            {
                //reset backward
                for (var i = index - 1; i >= 0; i--)
                {
                    if (!FIX[i])
                    {
                        C[i] = 0;
                        if (AvailableArray[i].length > 1 &&
                            (AvailableArray[i][RealIndex[i] + 1] !== null || AvailableArray[i][RealIndex[i] + 1] !== undefined))
                        {
                            result = index - i;
                            break;
                        }
                        else
                        {
                            RealIndex[i] = 0;
                        }
                    }
                }
            }
            else
            {
                console.log("get ", RealIndex, index, RealIndex[index]);
                C[index] = AvailableArray[index][RealIndex[index]];
            }

            console.log("getAvailableForCell", result, C);
            return result;
        }

        private referenceTable = (wSmall: number, hSmall: number, wBig: number, hBig: number) =>
        {
            var result: Models.ReferenceNode[] = new Array<Models.ReferenceNode>();
            for (var hb = 0; hb < hBig; hb++)
                for (var wb = 1; wb <= wBig; wb++)
                    for (var hs = 0; hs < hSmall; hs++)
                        for (var ws = 1; ws <= wSmall; ws++)
                        {
                            console.log(wb + hb * wBig, hs + 1 + hb * wBig, hs * wSmall + ws);
                        }

            console.log("result", result);
            return result;
        }
    }

    angular
        .module("Sudoku")
        .service(SudokuService.ngName, SudokuService);
}
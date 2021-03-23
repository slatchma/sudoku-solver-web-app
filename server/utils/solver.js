/**
 * @desc show if number is missing in the line
 * @param grid { array } - sudoku's grid
 * @param number { number } - it's the number we're going to look for
 * @param lineNumber { number } - the line number
 * @return bool - return true if number is missing in the line, otherwise false
 */
const missingLine = (grid, number, lineNumber) => {
    const line = grid[lineNumber];
    if (line.includes(number)) {
        return false;
    }
    return true;
};

/**
 * @desc show if number is missing in the column
 * @param grid { array } - sudoku's grid
 * @param number { number } - it's the number we're going to look for
 * @param columnNumber { number } - the column number
 * @return bool - return true if number is missing in the column, otherwise false
 */
const missingColumn = (grid, number, columnNumber) => {
    const column = grid.map(line => line[columnNumber]);
    if (column.includes(number)) {
        return false;
    }
    return true;
};

/**
 * @desc show if number is missing in the bloc
 * @param grid { array } - sudoku's grid
 * @param number { number } - it's the number we're going to look for
 * @param lineNumber { number } - the line number
 * @param columnNumber { number } - the column number
 * @return bool - return true if number is missing in the bloc, otherwise false
 */
const missingBloc = (grid, number, lineNumber, columnNumber) => {
    let line = 0;
    let column = 0;

    const lineBloc = lineNumber - (lineNumber % 3);
    const columnBloc = columnNumber - (columnNumber % 3);

    for (line = lineBloc; line < lineBloc + 3; line += 1) {
        for (column = columnBloc; column < columnBloc + 3; column += 1) {
            if (grid[line][column] === number) {
                return false;
            }
        }
    }
    return true;
}

const solver = (grid, position) =>
{
    // if the solver arrives at the 82nd box, it's finish
    if (position === 81) {
        return true;
    }

    // calculation of coordinates (line, column) and init number
    let number = 0;
    const line = Math.trunc(position / 9);
    const column = position % 9;

    //if the box is filled in, the solver goes to the next box
    if (grid[line][column] !== 0) {
        return solver(grid, position + 1)
    }
    

     //backtracking
     for (number = 1; number <= 9; number += 1) {
        if (missingLine(grid, number, line) && missingColumn(grid, number, column) && missingBloc(grid, number, line, column)) {
           grid[line][column] = number;
           if (solver(grid, position + 1)) {
               return true
           }
       }
   }

   grid[line][column] = 0;
   return false;
}

module.exports = solver;

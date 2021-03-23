const checkBloc = (grid, line, column) => {
    let i = 0;
    let j = 0;
    const arrayBloc = [];
    const arraySaveValueBloc = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (i = line; i < line + 3; i += 1) {
        for (j = column; j < column + 3; j += 1) {
            arrayBloc.push(grid[i][j]);
        }
    }
    arrayBloc.forEach(element => {
        if (element !== 0) {
            arraySaveValueBloc[element] += 1;
        }
    })
    if (arraySaveValueBloc.find(element => element > 1)) {  
        return true;
    }
    return false;
}

const checkColumn = grid => {
    let i = 0;
    let j = 0;
    let arraySaveValueColumn = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (j = 0; j < 9; j += 1) {
        arraySaveValueColumn = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < 9; i += 1) {
            if (grid[i][j] !== 0) {
                arraySaveValueColumn[grid[i][j]] += 1;
            }
        }
        if (arraySaveValueColumn.find(element => element > 1)) {
            return true;
        }
    }
    return false;
}


    const checkGrid = grid => {
    let i = 0;
    let j = 0;
    const numberCheckBloc = [0, 3, 6];
    let arraySaveValueLine = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    // test gridErrorLengthColumn
    if(grid.length !== 9) {
        return false;
    }
    for(i = 0; i < grid.length; i += 1) {
        // test gridErrorLengthLine
        if (grid[i].length !== 9) {
            return false;
        }
        
        arraySaveValueLine = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (j = 0; j < grid[i].length; j += 1) {
            // test gridErrorLetter
            if (typeof(grid[i][j]) !== typeof(1)) {
                return false;
            }

            // test gridInvalidNumber 
            if (grid[i][j] > 9 || grid[i][j] < 0) {                             
                return false;
            }
            
            // test gridInvalidBloc
            if(numberCheckBloc.includes(i) && numberCheckBloc.includes(j)) {
                if (checkBloc(grid, i, j)) {
                    return false;
                }
            }

            if (grid[i][j] !== 0) {
                arraySaveValueLine[grid[i][j]] += 1;
            }
        }

        // test gridInvalidLine
        if (arraySaveValueLine.find(element => element > 1)) {
            return false;
        }
    }
    // test gridInvalidColumn
    if(checkColumn(grid)) {
        return false;
    }
    


    return(true);
};

module.exports = checkGrid;

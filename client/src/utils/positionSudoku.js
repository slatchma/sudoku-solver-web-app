/**
 * @desc find position (line and column) of box thanks to select's name 
 * @param key { string } is the select's name 
 */
const positionSudoku = key => {
    let position = 0;
    let line = 0;
    let column = 0;
    let [box, number] = key.split('-');
    box = parseInt(box);
    number = parseInt(number) + 1;

    // position = number + box + Math.trunc((number - 1) / 3) * 6 - 1;
    position = number + (18 * Math.trunc(box / 3) + box * 3) + Math.trunc((number - 1) / 3) * 6 - 1
    line = Math.trunc(position / 9);
    column = position % 9;

    return [line, column];
}

export default positionSudoku;
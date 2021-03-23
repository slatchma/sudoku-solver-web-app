const checkGrid = require("../utils/checkGrid");

const gridValid = [
    [1, 2, 3, 0, 0, 0, 0, 0, 0],
    [4, 5, 6, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0, 0],
    [0, 0, 0, 4, 5, 6, 0, 0, 0],
    [0, 0, 0, 7, 8, 9, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 3],
    [0, 0, 0, 0, 0, 0, 4, 5, 6],
    [0, 0, 0, 0, 0, 0, 7, 8, 9],
  ];
  
const gridInvalidLine = [
    [1, 2, 3, 0, 0, 0, 0, 0, 1],
    [4, 5, 6, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0, 0],
    [0, 0, 0, 4, 5, 6, 0, 0, 0],
    [0, 0, 0, 7, 8, 9, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 3],
    [0, 0, 0, 0, 0, 0, 4, 5, 6],
    [0, 0, 0, 0, 0, 0, 7, 8, 9],
];

const gridInvalidColumn = [
    [1, 2, 3, 0, 0, 0, 0, 0, 0],
    [4, 5, 6, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0, 0],
    [1, 0, 0, 4, 5, 6, 0, 0, 0],
    [0, 0, 0, 7, 8, 9, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 3],
    [0, 0, 0, 0, 0, 0, 4, 5, 6],
    [0, 0, 0, 0, 0, 0, 7, 8, 9],
];

const gridInvalidBloc = [
    [1, 2, 3, 0, 0, 0, 0, 0, 0],
    [4, 1, 6, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0, 0],
    [1, 0, 0, 4, 5, 6, 0, 0, 0],
    [0, 0, 0, 7, 8, 9, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 3],
    [0, 0, 0, 0, 0, 0, 4, 5, 6],
    [0, 0, 0, 0, 0, 0, 7, 8, 9],
];

const gridInvalidNumber = [
    [1, 2, 3, 0, 0, 0, 0, 0, 0],
    [4, 5, 6, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0, 0],
    [0, 0, 0, 4, 5, 6, 0, 0, 0],
    [0, 0, 0, 700, 8, 9, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 3],
    [0, 0, 0, 0, 0, 0, 4, 5, 6],
    [0, 0, 0, 0, 0, 0, 7, 8, 9],
  ];
  
const gridErrorLetter = [
    [1, 2, 3, 0, 0, 0, 0, 0, 0],
    [4, 5, 6, 0, 0, '1', 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0, 0],
    [0, 0, 0, 4, 5, 6, 0, 0, 0],
    [0, 0, 0, 7, 8, 9, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 3],
    [0, 0, 0, 0, 0, 0, 4, 5, 6],
    [0, 0, 0, 0, 0, 0, 7, 8, 9],
];
  
const gridErrorLengthColumn = [
    [1, 2, 3, 0, 0, 0, 0, 0, 0],
    [4, 5, 6, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0, 0],
    [0, 0, 0, 4, 5, 6, 0, 0, 0],
    [0, 0, 0, 7, 8, 9, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 3],
    [0, 0, 0, 0, 0, 0, 7, 8, 9],
];

const gridErrorLengthLine = [
    [1, 2, 3, 0, 0, 0, 0, 0, 0],
    [4, 5, 6, 0, 0, 0, 0, 0, 0],
    [7, 8, 9, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 3, 0, 0, 0],
    [0, 0, 0, 4, 5, 6, 0, 0, 0],
    [0, 0, 0, 7, 8, 9, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 3],
    [0, 0, 0, 0, 0, 0, 7, 8, 9],
];


describe('check grid', () => {
    it('check grid valid', () => {
        expect(checkGrid(gridValid)).toBe(true);
    });

    it('check grid invalid line', () => {
        expect(checkGrid(gridInvalidLine)).toBe(false);
    });


    it('check grid invalid column', () => {
        expect(checkGrid(gridInvalidColumn)).toBe(false);
    });


    it('check grid invalid bloc', () => {
        expect(checkGrid(gridInvalidBloc)).toBe(false);
    });

    it('check grid invalid number', () => {
        expect(checkGrid(gridInvalidNumber)).toBe(false);
    });

    it('check grid error letter', () => {
        expect(checkGrid(gridErrorLetter)).toBe(false);
    })

    it('check grid error length', () => {
        expect(checkGrid(gridErrorLengthColumn)).toBe(false);
    })

    it('check grid error length line', () => {
        expect(checkGrid(gridErrorLengthLine)).toBe(false);
    })
})
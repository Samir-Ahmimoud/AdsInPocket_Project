export enum Block {
    I = 'I',
    J = 'J',
    L = 'L',
    O = 'O',
    S = 'S',
    T = 'T',
    Z = 'Z'
}
export enum EmptyCell {
    Empty = 'Empty'
}

export type CellOptions = Block | EmptyCell;

export type BoardShape = CellOptions[][];

export type BlockShape = boolean[][]

type ShapesObj = {
    [key in Block]: {
      shape: BlockShape;
    };
  };

export const SHAPES: ShapesObj = {
    I: {
        shape: [
            [false, true, false, false],
            [false, true, false, false],
            [false, true, false, false],
            [false, true, false, false]
        ]
    },
    J: {
        shape: [
            [true, true, false],
            [true, false, false],
            [true, false, false],
        ]
    },
    L: {
        shape: [
            [true, false, false],
            [true, false, false],
            [true, true, false],
        ]
    },
    O: {
        shape: [
            [true, true],
            [true, true],
        ]
    },
    S: {
        shape: [
            [true, false, false],
            [true, true, false],
            [false, true, false],
        ]
    },
    T: {
        shape: [
            [true, false, false],
            [true, true, false],
            [true, false, false],
        ]
    },
    Z: {
        shape: [
            [false, true, false],
            [true, true, false],
            [true, false, false],
        ]
    },
}
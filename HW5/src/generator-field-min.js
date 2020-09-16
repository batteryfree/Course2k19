function getRundomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMines(sizeMinefieldX, sizeMinefieldY, mines) {
    const sizeMinefield = (sizeMinefieldX * sizeMinefieldY) - 1;
    let numOfMine = mines;
    const mineField = [];

    for (let y = 0; y < sizeMinefieldY; y++) {
        mineField[y] = [];
        for (let x = 0; x < sizeMinefieldX; x++) {
            mineField[y][x] = 0;
        }
    }

    while (numOfMine !== 0) {
        const mine = getRundomNumber(0, sizeMinefield);
        const mineY = Math.trunc(mine / sizeMinefieldX);
        const mineX = mine - mineY * sizeMinefieldX;
        if (mineField[mineY][mineX] !== -1) {
            mineField[mineY][mineX]--;
            numOfMine--;
        }
    }
    return mineField;
}

function setMineCntainer(mineField, sizeMinefieldX, sizeMinefieldY) {
    const arr = mineField;
    for (let y = 0; y < sizeMinefieldY; y++) {
        for (let x = 0; x < sizeMinefieldX; x++) {
            if (arr[y][x] !== -1) {
                if (arr[y][x + 1] === -1) arr[y][x]++;
                if (arr[y][x - 1] === -1) arr[y][x]++;
                if (y !== 0) {
                    if (arr[y - 1][x] === -1) arr[y][x]++;
                    if (arr[y - 1][x - 1] === -1) arr[y][x]++;
                    if (arr[y - 1][x + 1] === -1) arr[y][x]++;
                }
                if (y !== sizeMinefieldY - 1) {
                    if (arr[y + 1][x] === -1) arr[y][x]++;
                    if (arr[y + 1][x - 1] === -1) arr[y][x]++;
                    if (arr[y + 1][x + 1] === -1) arr[y][x]++;
                }
            }
        }
    }
    return arr;
}

function generateField(sizeMineFieldX, sizeMineFieldY, mines) {
    const mineField = generateMines(sizeMineFieldX, sizeMineFieldY, mines);
    return setMineCntainer(mineField, sizeMineFieldX, sizeMineFieldY);
}

export default function generateFieldMine(sizeMineFieldX, sizeMineFieldY, mines) {
    const mineField = generateField(sizeMineFieldX, sizeMineFieldY, mines);

    return mineField.map((row) => row.map((cell) => {
        let caption = cell;
        if (caption === 0) caption = '\u00A0';
        if (caption === -1) caption = '*';
        return {
            cap: caption,
            disabled: false,
            lock: false,
            children: '\u00A0',
        };
    }));
}

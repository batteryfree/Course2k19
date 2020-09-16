export default function emptyCell(mineField, row, col, sizeY, sizeX) {
    if (mineField[row][col].disabled) return;
    // eslint-disable-next-line no-param-reassign
    mineField[row][col].children = mineField[row][col].cap;
    // eslint-disable-next-line no-param-reassign
    mineField[row][col].disabled = true;
    if (mineField[row][col].cap !== '\u00A0') return;
    if (row > 0) emptyCell(mineField, row - 1, col, sizeY, sizeX);
    if (row < sizeY - 1) emptyCell(mineField, row + 1, col, sizeY, sizeX);
    if (col > 0) emptyCell(mineField, row, col - 1, sizeY, sizeX);
    if (col < sizeX - 1) emptyCell(mineField, row, col + 1, sizeY, sizeX);
}

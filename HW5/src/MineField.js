import React from 'react';
import Button from './Button';
import generatorField from './generator-field-min';
import emptyCell from './empty-cell';
import Setings from './Setings';

export default class MineField extends React.Component{
    constructor(props) {
        super(props);
        this.row = 6;
        this.col = 6;
        this.mines = 5;
        this.mineFieldArr = generatorField(this.col, this.row, this.mines);
        this.state = ({
            mineField: this.mineFieldArr,
            maxMine: 36,
        });
    }

    handleClick = (row, col) => {

        if (this.mineFieldArr[row][col].lock) return;

        emptyCell(this.mineFieldArr, row, col, this.row, this.col);

        let openCell = 0;

        this.mineFieldArr.forEach(element => {
            element.forEach((cell) => {
                if (cell.disabled) openCell++
            })
        });

        if(this.mineFieldArr[row][col].cap === '*') {
            openCell = 0;
            this.mineFieldArr.forEach(element => {
                element.forEach(cell => {
                    cell.disabled = true
                    cell.children = cell.cap
                })
            });
            alert('YOU LOSE!!!');
        }


        if (openCell === (this.row * this.col - this.mines)) {
            this.mineFieldArr.forEach(element => {
                element.forEach(cell => cell.disabled = true)
            })
            alert('YOUR WON!!!');
        }

        this.setState({
            mineField: this.mineFieldArr
        })
    }

    handleClickR = (row, col) => {
        if (this.mineFieldArr[row][col].lock) {
            this.mineFieldArr[row][col].lock = false;
            this.mineFieldArr[row][col].children = '\u00A0';
        } else {
            this.mineFieldArr[row][col].lock = true;
            this.mineFieldArr[row][col].children = 'M';
        }

        this.setState({
            mineField: this.mineFieldArr
        });
    }


    reStart = () => {
        if (this.mines > this.row * this.col) this.mines = this.row * this.col
        this.mineFieldArr = generatorField(this.col, this.row, this.mines);
        this.setState({
            maxMine: this.row * this.col,
            mineField: this.mineFieldArr,
        })
    }

    handleChangeRow = (value) => {
        this.row = parseInt(value, 10);
        this.reStart();
    }

    handleChangeCol = (value) => {
        this.col = parseInt(value, 10); 
        this.reStart();
    }

    handleChangeMine = (value) => {
        this.mines = parseInt(value, 10);
        this.reStart();
    }

    render() {
        return( 
            <div>
                <Setings
                    handleChangeRow={this.handleChangeRow}
                    handleChangeMine = {this.handleChangeMine}
                    handleChangeCol = {this.handleChangeCol}
                    min={6}
                    max={16}
                    maxMine={this.state.maxMine}
                    handleClick = {this.reStart}
                ></Setings>
                {
                this.mineFieldArr.map((row, indexY) => {
                    return (
                        <div key={indexY}>{
                            row.map((cell, indexX) => {
                                return(
                                    <Button
                                        key={indexX}
                                        row={indexY}
                                        col={indexX}
                                        colorText={this.state.mineField[indexY][indexX].children}
                                        children={this.state.mineField[indexY][indexX].children}
                                        disabled={this.state.mineField[indexY][indexX].disabled}
                                        onClick={this.handleClick}
                                        handleClickR={this.handleClickR}
                                    ></Button>
                                );
                            })
                        }</div>
                    );
                })
            }</div>
        );
    }
}

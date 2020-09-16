import React from 'react';
import './Setings.css';
import PropTypes from 'prop-types';

export default class Setings extends React.Component {

    handleChangeRow = (event) => {
        this.props.handleChangeRow(event.target.value);
    }

    handleChangeCol = (event) => {
        this.props.handleChangeCol(event.target.value);
    }

    handleChangeMine = (event) => {
        this.props.handleChangeMine(event.target.value);
    }   

    handleClick = () => {
        this.props.handleClick();
    }

    render() {
        return (
            <div className="setings">
                <input
                    className="slider"
                    type="range"
                    defaultValue={this.props.min}
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.handleChangeRow}
                ></input><br/>
                <input
                    className="slider"
                    type="range"
                    defaultValue={this.props.min}
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.handleChangeCol}
                ></input><br/>
                <input
                    className="slider"
                    type="range"
                    defaultValue={5}
                    min={1}
                    max={this.props.maxMine}
                    onChange={this.handleChangeMine}
                ></input><br/>
                <button
                    onClick={this.handleClick}
                    className="button-reset"
                    type="button"
                >Restart</button>
            </div>
        );
    }
}

Setings.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    maxMine: PropTypes.number,
    handleClick: PropTypes.func,
    onChandleChangeRow: PropTypes.func,
    handleChangeMine: PropTypes.func,
    handleChangeCol: PropTypes.func,
};

import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
    // eslint-disable-next-line no-param-reassign
    handleClick = () => {
        this.props.onClick(this.props.row, this.props.col);
    }

    handleClickR = (event) => {
        this.props.handleClickR(this.props.row, this.props.col);
        event.preventDefault();
    }

    render() {
        return (
            <button className="button"
                color-text={this.props.colorText}
                type="button"
                disabled={this.props.disabled}
                onClick={this.handleClick}
                onContextMenu={this.handleClickR}
            >{this.props.children}</button>
        );
    }
}

Button.propTypes = {
    colorText: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    handleClick: PropTypes.func,
    onContextMenu: PropTypes.func,
    onClick: PropTypes.func,
    handleClickR: PropTypes.func,
    row: PropTypes.number,
    col: PropTypes.number,
};

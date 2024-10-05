import React from "react";
import './filter.css';

const Filter = ({filter}) => {
    return (
            <button  className={filter.isActive ? 'selected' : ''}>
                {filter.label}
            </button>
    );
};

export default Filter;
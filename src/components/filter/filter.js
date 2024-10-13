import React from "react";
import './filter.css';

const Filter = ({filter, setActiveFilter}) => {

    return (
            <button
                className={filter.isActive ? 'selected' : ''}
                onClick={() => {
                    setActiveFilter(filter.id);
                }}
            >
                {filter.label}
            </button>
    );
};

export default Filter;
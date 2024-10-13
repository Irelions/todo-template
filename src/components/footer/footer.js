import React from "react";
import './footer.css';

import TasksFilter from "../tasks-filter";

const Footer = ({setActiveFilter, clearAllCompleted, countActiveTask}) => {

    return (
        <footer className='footer'>
            <span className='todo-count'> {countActiveTask} items left</span>
            <TasksFilter
                setActiveFilter={(filterId) => {
                    setActiveFilter(filterId)
                }}
            />
            <button
                className='clear-completed'
                onClick={clearAllCompleted}
            >
                Clear completed
            </button>
        </footer>

    );
};

export default Footer;
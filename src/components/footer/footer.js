import React from "react";
import './footer.css';

import TasksFilter from "../tasks-filter";

const Footer = () => {
    const filters = [
        {id: 'all', label: 'All', isActive: true},
        {id: 'active', label: 'Active', isActive: false},
        {id: 'completed', label: 'Completed', isActive: false},
    ];


    return (
        <footer className='footer'>
            <span className='todo-count'> 1 items left</span>
            <TasksFilter filters = {filters}/>
            <button className='clear-completed'>Clear completed</button>
        </footer>

    );
};

export default Footer;
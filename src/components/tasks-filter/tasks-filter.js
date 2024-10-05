import React from "react";
import './tasks-filter.css';

import Filter from "../filter";

const TasksFilter = ({filters}) => {
    return (
        <ul className='filters'>
            {filters.map(filter => {
                return (
                    <li key={filter.id}>
                        <Filter filter={filter}/>;
                    </li>
                )
            })}
        </ul>
    );
};


export default TasksFilter;
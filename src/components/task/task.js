import React from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './task.css';

const Task = ({task}) => {

    return (
        <div className='view'>
            <input className='toggle' type="checkbox"/>
            <label>
                <span className='description'>{task.description}</span>
                <span className='created'>{formatDistanceToNow(task.timeAgo, { addSuffix: true })}</span>
            </label>
            <button className='icon icon-edit'></button>
            <button className='icon icon-destroy'></button>

        </div>
    );
};

export default Task;
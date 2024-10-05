import React from "react";
import './task-list.css';

import Task from "../task";

const TaskList = ({tasks}) => {
    return (
        <ul className='todo-list'>
            {
                tasks.map(({id, clazzName, ...props})=> {
                    return (

                        <li key={id} className={clazzName}>
                            <Task task={props}/>
                            {
                                clazzName === 'editing' ? <input className='edit' type="text" value='Editing task'/> : null
                            }
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default TaskList;
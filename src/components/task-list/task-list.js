import React, {Component} from "react";
import './task-list.css';

import Task from "../task";


export default class TaskList extends Component{

    render() {
        const {tasks, deleteTask} = this.props;
        return (
            <ul className='todo-list'>
                {
                    tasks.map((task)=> {
                        return (
                                <Task
                                    task={task}
                                    deleteTask = {(id) => deleteTask(id)}
                                />
                        );
                    })
                }
            </ul>
        );
    }
};
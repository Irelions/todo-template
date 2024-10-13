import React, {Component} from "react";
import './task-list.css';

import Task from "../task";


export default class TaskList extends Component{

    render() {
        const {tasks, deleteTask, onDoneTask, filterState} = this.props;
        return (
            <ul className='todo-list'>
                {
                    tasks
                        .filter(task => {
                            if (filterState === 'active') {
                                return task.done !== true;
                            } else if (filterState === 'completed') {
                                return task.done === true;
                            } else {
                                return true;
                            }
                        })
                        .map((task)=> {
                        return (
                            <Task
                                task={task}
                                deleteTask={(id) => deleteTask(id)}
                                onDoneTask={(id) => onDoneTask(id)}
                            />
                        );
                    })
                }
            </ul>
        );
    }
};
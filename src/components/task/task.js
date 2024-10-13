import React, {Component} from "react";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import './task.css';

export default class Task extends Component {

    render() {
        const {id, description, done} = this.props.task;
        const {deleteTask, onDoneTask} = this.props;

        let className;
        let checked;

        if (done) {
            className = 'completed';
            checked = true;
        } else {
            className = '';
            checked = false;
        }

        return (
            <li key={id} className={className}>
                <div className='view'>
                    <input
                        className='toggle'
                        type="checkbox"
                        checked={checked}
                        onClick={() => {
                            onDoneTask(id);
                        }}
                    />
                    <label>
                        <span className='description'>{description}</span>
                        <span className='created'>{formatDistanceToNow(new Date(2000, 1,1), {addSuffix: true})}</span>
                    </label>
                    <button className='icon icon-edit'></button>
                    <button
                        className='icon icon-destroy'
                        onClick={() => deleteTask(id)}
                    ></button>
                </div>
                {
                    className === 'editing' ? <input className='edit' type="text" value='Editing task'/> : null
                }
            </li>
        );
    };
};
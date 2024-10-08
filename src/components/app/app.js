import React, {Component} from "react";
import './app.css';

import AppHeader from "../app-header";
import AppMain from "../app-main";


export default class App extends Component{
    state = {
        tasks: [
            {id: 1, description: 'Completed task', timeAgo: new Date(2024, 9, 2)},
            {id: 2,  description: 'Editing task', timeAgo: new Date(2014, 6, 2)},
            {id: 3,  description: 'Active task', timeAgo: new Date(2014, 6, 2)},
        ]
    };

    deleteTask = (id) => {
        this.setState(({tasks}) => {
            const newTasks = tasks.filter((task) => task.id !== id);
            return {
                tasks: newTasks,
            };
        });
    };

    render() {
        const {tasks} = this.state;

        return (
            <section className='todoapp'>
                <AppHeader/>
                <AppMain
                    tasks={tasks}
                    deleteTask={(id) =>{
                        this.deleteTask(id);
                    }}
                />
            </section>
        );
    }
};
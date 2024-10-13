import React, {Component} from "react";
import './app.css';

import AppHeader from "../app-header";
import AppMain from "../app-main";

export default class App extends Component{

    countId = 1;
    createTask = (description) => {
        return {
            id: this.countId++,
            description: description,
            done: false,
            timeAgo: Date.now(),
        }
    };

    state = {
        tasks: [
            this.createTask('Completed task'),
            this.createTask('Editing task'),
            this.createTask('Active task'),
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

    onDoneTask = (id) => {

        this.setState(({tasks}) => {
            const indexTask = tasks.findIndex(task => task.id === id);
            const beforeArray = tasks.slice(0, indexTask);
            const afterArray = tasks.slice(indexTask + 1);
            const oldTask = tasks[indexTask];
            oldTask['done'] = !oldTask['done'];
            return {
                tasks: [...beforeArray, oldTask, ...afterArray],
            }
        })
    }

    addTask = (descriptionTask) => {
        const newTask = this.createTask(descriptionTask);
        this.setState(({tasks}) => {
            return {
                tasks: [...tasks, newTask]
            };
        });
    }

    clearAllCompleted = () => {
        const allCompleted = this.state.tasks
            .filter((task) => task.done)
            .map((task) => {return task.id})
        allCompleted.forEach((taskId) => {
            this.deleteTask(taskId);
        })
    }

    getCountActiveTask() {
        return this.state.tasks.filter((task) => !task.done).length;
    }

    render() {
        const {tasks} = this.state;

        return (
            <section className='todoapp'>
                <AppHeader addTask = {(description) => {
                    this.addTask(description);
                }}/>
                <AppMain
                    tasks={tasks}
                    deleteTask={(id) =>{
                        this.deleteTask(id);
                    }}
                    onDoneTask = {(id) => {
                        this.onDoneTask(id);
                    }}
                    clearAllCompleted = {() =>{
                        this.clearAllCompleted();
                    }}
                    countActiveTask = {this.getCountActiveTask()}
                />
            </section>
        );
    }
};
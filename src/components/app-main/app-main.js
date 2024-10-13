import React, {Component} from "react";
import './app-main.css';

import Footer from "../footer";
import TaskList from "../task-list";

export default class AppMain extends Component {

    state = {
        filterState: 'all'
    }

    updateFilterState = (filterId) => {
        this.setState( () => {
            return {
                filterState: filterId,
            };
        });
    };

    render() {
        const {tasks, deleteTask, onDoneTask, clearAllCompleted, countActiveTask} = this.props;
        return (
            <section className='main'>
                <TaskList
                    tasks={tasks}
                    deleteTask={(id) => deleteTask(id)}
                    onDoneTask={(id) => onDoneTask(id)}
                    filterState={this.state.filterState}
                />
                <Footer
                    setActiveFilter={(filterId) => this.updateFilterState(filterId)}
                    clearAllCompleted = {clearAllCompleted}
                    countActiveTask = {countActiveTask}
                />
            </section>
        );
    }
}
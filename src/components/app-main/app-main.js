import React from "react";
import './app-main.css';

import Footer from "../footer";
import TaskList from "../task-list";

const AppMain = ({tasks, deleteTask}) => {
    return (
        <section className='main'>
            <TaskList
                tasks={tasks}
                deleteTask={(id) => deleteTask(id)}
            />
            <Footer/>
        </section>
    );
};

export default AppMain;
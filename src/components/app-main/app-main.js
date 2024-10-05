import React from "react";
import './app-main.css';

import Footer from "../footer";
import TaskList from "../task-list";

const AppMain = ({tasks}) => {
    return (
        <section className='main'>
            <TaskList tasks = {tasks}/>
            <Footer/>
        </section>
    );
};

export default AppMain;
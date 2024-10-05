import React from "react";
import './app.css';

import AppHeader from "../app-header";
import AppMain from "../app-main";


const App = () => {
    const tasks = [
        {id: 1, clazzName: 'completed', description: 'Completed task', timeAgo: new Date(2024, 9, 2)},
        {id: 2, clazzName: 'editing', description: 'Editing task', timeAgo: new Date(2014, 6, 2)},
        {id: 3, clazzName: 'view', description: 'Active task', timeAgo: new Date(2014, 6, 2)},
    ];

    return (
        <section className='todoapp'>
            <AppHeader/>
            <AppMain tasks={tasks}/>
        </section>
    )
};

export default App;
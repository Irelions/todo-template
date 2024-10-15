import './app.css';

import AppHeader from '../app-header';
import AppMain from '../app-main';

import { Component } from 'react';

export default class App extends Component {
  countId = 1;

  constructor(props) {
    super(props);
    this.countPlusPlus = () => {
      this.countId += 1;
      return this.countId;
    };
    this.createTask = (description) => ({
      id: this.countPlusPlus(),
      description,
      taskState: '',
      timeAgo: Date.now(),
    });

    this.state = {
      tasks: [this.createTask('Completed task'), this.createTask('Editing task'), this.createTask('Active task')],
    };

    this.deleteTask = (id) => {
      this.setState(({ tasks }) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        return {
          tasks: newTasks,
        };
      });
    };

    this.changeTaskState = (id, state) => {
      this.setState(({ tasks }) => {
        const indexTask = tasks.findIndex((task) => task.id === id);
        if (indexTask !== -1) {
          let newTaskState;
          const beforeArray = tasks.slice(0, indexTask);
          const afterArray = tasks.slice(indexTask + 1);
          const oldTask = tasks[indexTask];
          const { taskState } = tasks[indexTask];
          const isFind = taskState.includes(state);
          if (isFind) {
            newTaskState = taskState.replace(state, '').trim();
          } else {
            newTaskState = `${taskState} ${state}`;
          }
          oldTask.taskState = newTaskState;
          return {
            tasks: [...beforeArray, oldTask, ...afterArray],
          };
        }
        return tasks;
      });
    };

    this.addTask = (descriptionTask) => {
      const newTask = this.createTask(descriptionTask);
      this.setState(({ tasks }) => ({
        tasks: [...tasks, newTask],
      }));
    };

    this.updateTask = (event, id, label) => {
      event.preventDefault();
      this.setState(({ tasks }) => {
        const indexTask = tasks.findIndex((task) => task.id === id);
        if (indexTask !== -1) {
          const beforeArray = tasks.slice(0, indexTask);
          const afterArray = tasks.slice(indexTask + 1);
          const oldTask = tasks[indexTask];
          oldTask.description = label;
          return {
            tasks: [...beforeArray, oldTask, ...afterArray],
          };
        }
        return tasks;
      });
    };

    this.clearAllCompleted = () => {
      const { tasks } = this.state;
      const allCompleted = tasks.filter((task) => task.taskState.includes('completed')).map((task) => task.id);
      allCompleted.forEach((taskId) => {
        this.deleteTask(taskId);
      });
    };

    this.getCountActiveTask = () => {
      const { tasks } = this.state;
      return tasks.filter((task) => !task.taskState.includes('completed')).length;
    };
  }

  render() {
    const { tasks } = this.state;
    return (
      <section className="todoapp">
        <AppHeader
          addTask={(description) => {
            this.addTask(description);
          }}
        />
        <AppMain
          tasks={tasks}
          deleteTask={(id) => {
            this.deleteTask(id);
          }}
          updateTask={(event, id, label) => {
            this.updateTask(event, id, label);
          }}
          changeTaskState={(id, state) => {
            this.changeTaskState(id, state);
          }}
          clearAllCompleted={() => {
            this.clearAllCompleted();
          }}
          countActiveTask={this.getCountActiveTask()}
        />
      </section>
    );
  }
}

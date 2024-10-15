import './task-list.css';
import Task from '../task';

import PropTypes from 'prop-types';

import { Component } from 'react';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    TaskList.defaultProps = {
      deleteTask: () => {},
      updateTask: () => {},
      changeTaskState: () => {},
      filterState: 'all',
    };

    TaskList.propTypes = {
      deleteTask: PropTypes.func,
      updateTask: PropTypes.func,
      changeTaskState: PropTypes.func,
      filterState: PropTypes.string,
    };
  }

  render() {
    const { tasks, deleteTask, updateTask, changeTaskState, filterState, editTask } = this.props;
    return (
      <ul className="todo-list">
        {tasks
          .filter((task) => {
            if (filterState === 'active') {
              return task.taskState === '';
            }
            if (filterState === 'completed') {
              return task.taskState.includes('completed');
            }
            return true;
          })
          .map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteTask={(id) => deleteTask(id)}
              updateTask={(event, id, label) => updateTask(event, id, label)}
              changeTaskState={(id, state) => changeTaskState(id, state)}
              editTask={(id) => editTask(id)}
            />
          ))}
      </ul>
    );
  }
}

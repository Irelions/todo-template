import './app-main.css';

import Footer from '../footer';

import TaskList from '../task-list';
import PropTypes from 'prop-types';

import { Component } from 'react';

export default class AppMain extends Component {
  state = {
    filterState: 'all',
  };

  constructor(props) {
    super(props);
    AppMain.defaultProps = {
      deleteTask: () => {},
      updateTask: () => {},
      changeTaskState: () => {},
      clearAllCompleted: () => {},
      countActiveTask: -1,
    };

    AppMain.propTypes = {
      deleteTask: PropTypes.func,
      updateTask: PropTypes.func,
      changeTaskState: PropTypes.func,
      clearAllCompleted: PropTypes.func,
      countActiveTask: PropTypes.number,
    };
    this.updateFilterState = (filterId) => {
      this.setState(() => ({
        filterState: filterId,
      }));
    };
  }

  render() {
    const { tasks, deleteTask, updateTask, changeTaskState, clearAllCompleted, countActiveTask } = this.props;
    const { filterState } = this.state;
    return (
      <section className="main">
        <TaskList
          tasks={tasks}
          deleteTask={(id) => deleteTask(id)}
          updateTask={(event, id, label) => updateTask(event, id, label)}
          changeTaskState={(id, state) => changeTaskState(id, state)}
          filterState={filterState}
        />
        <Footer
          setActiveFilter={(filterId) => this.updateFilterState(filterId)}
          clearAllCompleted={clearAllCompleted}
          countActiveTask={countActiveTask}
        />
      </section>
    );
  }
}

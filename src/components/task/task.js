import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import './task.css';

import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Task extends Component {
  state = {
    label: '',
  };

  constructor(props) {
    super(props);
    Task.defaultProps = {
      id: 0,
    };
    Task.propTypes = {
      id: PropTypes.number,
    };
    this.onLabelChange = (event) => {
      this.setState({
        label: event.target.value,
      });
    };
    this.setLabelState = (description) => {
      this.setState(() => ({
        label: description,
      }));
    };
  }

  render() {
    const { task } = this.props;
    const { id, description, timeAgo, taskState } = task;
    const { changeTaskState, deleteTask, updateTask } = this.props;
    const { label } = this.state;
    const completed = 'completed';
    const editing = 'editing';

    return (
      <li className={taskState}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={taskState.includes(completed)}
            onChange={() => {
              changeTaskState(id, completed);
            }}
          />
          <label>
            <span className="description">{description}</span>
            <span className="created">{`created ${formatDistanceToNow(new Date(timeAgo), { addSuffix: true })}`}</span>
          </label>
          <button
            type="button"
            aria-label="Edit"
            className="icon icon-edit"
            onClick={() => {
              this.setLabelState(description);
              changeTaskState(id, editing);
            }}
          />
          <button type="button" aria-label="Delete" className="icon icon-destroy" onClick={() => deleteTask(id)} />
        </div>
        <form
          onSubmit={(event) => {
            updateTask(event, id, label);
            changeTaskState(id, editing);
          }}
        >
          <input className="edit" type="text" onChange={this.onLabelChange} value={label} />
        </form>
      </li>
    );
  }
}

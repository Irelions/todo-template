import './app-header.css';

import { Component } from 'react';

export default class AppHeader extends Component {
  state = {
    label: '',
  };

  constructor(props) {
    super(props);
    this.onLabelChange = (event) => {
      this.setState(() => {
        const newTaskDescription = event.target.value;
        return {
          label: newTaskDescription,
        };
      });
    };
    this.onSubmit = (event) => {
      const { addTask } = this.props;
      const { label } = this.state;
      event.preventDefault();
      const descriptionTask = label;
      if (descriptionTask !== '') {
        addTask(descriptionTask);
      }
      this.setState(() => ({
        label: '',
      }));
    };
  }

  render() {
    const { label } = this.state;
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            type="text"
            onChange={this.onLabelChange}
            value={label}
          />
        </form>
      </header>
    );
  }
}

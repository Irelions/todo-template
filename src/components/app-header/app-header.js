import React, {Component} from "react";

import './app-header.css';

export default class AppHeader extends Component {
    state = {
        label: ''
    }

    onLabelChange = (event) => {
         this.setState({
             label: event.target.value,
         })
    };

    onSubmit = (event) => {
        event.preventDefault();
        const descriptionTask = this.state.label;
        if (descriptionTask !== '') {
            this.props.addTask(descriptionTask);
        }
        this.setState(() =>{
                return{
                    label: '',
                }
        }
        )
    };

    render() {
        return (
            <header className='header'>
                <h1>todos</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        className='new-todo'
                        placeholder='What needs to be done?'
                        autoFocus={true}
                        type='text'
                        onChange={this.onLabelChange}
                        value = {this.state.label}
                    />
                </form>
            </header>
        )
    }
};
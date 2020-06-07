import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <TextField type="text" id="filled-basic" label="Add Todo" variant="filled" onChange={this.handleChange} value={this.state.content}/>
        </form>
      </div>
    )
  }
}

export default AddTodo
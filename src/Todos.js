import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';

const Todos = ({todos, deleteTodo}) => {
  
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
            <div className="todo-container">
            <span className="todo-items">{todo.content}</span>
            <Button variant="contained" color="secondary" onClick={() => {deleteTodo(todo.id)}}>Delete Todo</Button>
            </div>
        </div>
      )
    })
  ) : (
    <p>You have no todo's left!</p>
  );

  return (
      <Container maxWidth="sm">
        <div className="todos-collection">
          <Typography variant="h4" color="secondary" gutterBottom>
            Your Todo's
          </Typography>
          <Typography variant="overline" color="textPrimary" gutterBottom>
            {todoList}
          </Typography>
        </div>
      </Container>

  )
}

export default Todos
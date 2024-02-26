import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todoList, setTodosList] = useState([]);  //quản lý todolist

  useEffect(() => {
    axios.get('https://dummyjson.com/todos')
      .then(response => setTodosList(response.data.todos))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>
            <div>
              <p>{todo.todo}</p>
              <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
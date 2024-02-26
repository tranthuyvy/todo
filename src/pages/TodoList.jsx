import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
  const [todoList, setTodosList] = useState([]);  //quản lý todolist
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dummyjson.com/todos')
      .then(response => setTodosList(response.data.todos))
      .catch(error => console.error('Error: ', error));
  }, []);

  const handleDetail = (id) => {
    navigate(`/todo/${id}`)
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>
            <div>
              <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.todo}</p>
              <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
              <button onClick={() => handleDetail(todo.id)}>Detail</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
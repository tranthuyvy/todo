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

  const handleUpdate = async (id) => {
    try {

      await axios.put(`https://dummyjson.com/todos/${id}`, { completed: !todoList.find(todo => todo.id === id).completed }).then(success => console.log(success, "Success"));

      //Updating a todo will not update it into the server =>

      const updatedTodoList = todoList.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      setTodosList(updatedTodoList);
    } catch (error) {
      console.error('Error update: ', error);
    }
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
              <button
                style={{ marginRight: '10px', border: '1px solid #000000', borderRadius: '8px', cursor: 'pointer' }}
                onClick={() => handleDetail(todo.id)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#491919';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.color = '#000000';
                }}
              >
                Detail
              </button>
              <button
                style={{ marginRight: '10px', border: '1px solid #000000', borderRadius: '8px', cursor: 'pointer' }}
                onClick={() => handleUpdate(todo.id)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#491919';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.color = '#000000';
                }}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
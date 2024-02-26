import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TodoDetail = () => {
  const [todoDetail, setTodoDetail] = useState(null); //manager todoDetail
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/todos/${id}`)
      .then(response => setTodoDetail(response.data))
      .catch(error => console.error('Error fetching detail: ', error));
  }, [id]); //id change => call API

  if (!todoDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Todo Detail</h2>
      <p>ID: {todoDetail.id}</p>
      <p>Todo: {todoDetail.todo}</p>
      <p>Completed: {todoDetail.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default TodoDetail;
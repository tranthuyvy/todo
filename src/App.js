import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList.jsx';
import TodoDetail from './pages/TodoDetail.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList/>} />
        <Route path="/todo/:id" element={<TodoDetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
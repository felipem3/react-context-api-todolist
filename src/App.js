import React, {useState} from 'react';
import TodoProvider from './contexts/TodoContext'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {

  const [todo,setTodo] = useState()

  return (
    <TodoProvider>
      <TodoList></TodoList>
      <br/>
      <br/>
      <AddTodo></AddTodo>
    </TodoProvider>
  );
}

export default App;

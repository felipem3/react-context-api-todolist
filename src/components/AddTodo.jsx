import React,{useContext, useState} from 'react'
import {TodoContext} from '../contexts/TodoContext'

function AddTodo() {
  const {saveTodo} = useContext(TodoContext)
  const [todo,setTodo] = useState()

  function handleFormSubmit(e){
    e.preventDefault()
    saveTodo(todo)
  }

  function handleInputChange(e){
    setTodo({
      ...todo,
      title: e.target.value
    })
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="title" id="title" placeholder="Nova Tarefa" onChange={handleInputChange} />
      <button>Adicionar</button>
    </form>
  )
}

export default AddTodo

import React from 'react'

function TodoListItem({todo}) {
  return (
    <div>
      {todo.id} - {todo.title} - {todo.done ? 'feito' : 'nao feito'}
    </div>
  )
}

export default TodoListItem

import React,  { useState } from 'react';
import './App.css'

function Todo({todo, index, completeTodo, removeTodo}) {
  return(
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className='todo'>{todo.text}
    <div>
    <button onClick={() => completeTodo(index)}>Complete</button>
    <button onClick={() => removeTodo(index)}>X</button>
    </div>
    </div>
  )
}

function TodoForm({addTodo}){
    const [value, setValue] = useState('');

    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('');
    }
    return(
      <form onSubmit={handleSubmit}>
        <input placeholder='Add Todo ...' type='text' className='input' value={value} onChange={e => setValue(e.target.value)}/>
      </form>
    )
}

function App() {
  const data =[
    {
      text: 'Learn about react',
      isCompleted: false
    },
    {
      text: 'Meet a friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build a reallycool todo app',
      isCompleted: false
    },
  ]
  const [todos, setTodos] = useState(data);
  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos)
  }
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className='app'>
    <div className='todo-list'>
    {todos.map((todo, index) => (
      <Todo key={index} index={index} removeTodo={removeTodo} completeTodo={completeTodo} todo={todo}/>
    ))}
    <TodoForm addTodo={addTodo}/>
    </div>
    </div>
  )
}

export default App

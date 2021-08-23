import React, { Fragment, useState, useRef} from "react";
import { TodoList } from './components/TodoList';
import { v4 as uuidv4} from 'uuid';

export function App(){
  const [ todos, setTodos ] = useState([
    {id: 1, task: 'Tarea 1', completed: false }
  ]);

  const todoTaskRef = useRef();

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if(task === '') return;

    setTodos((prevTodos) => {
        return [...prevTodos, { id: uuidv4(), task, completed: false }]
    })
  }

  return (
    <Fragment>
      <TodoList todos={[todos]}/>
        <input type="text" placeholder="nueva tarea" ></input>&nbsp;
        <button ref={todoTaskRef} onclick={handleTodoAdd}>➕️</button>&nbsp;
        <button>🗑️</button>
    </Fragment>
    );
}

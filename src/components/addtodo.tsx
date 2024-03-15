import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoslice.ts';
export default function addtodo() {
  const Dispatch = useDispatch();
  const [task, setTask] = useState('');

  const addtodohandler = (event:any) => {
    event.preventDefault();
    // Do something with the task value (e.g., add it to a to-do list)
    Dispatch(addTodo(task))
    // Clear the input field
    setTask('');
  };
  return (
    <>
      <form onSubmit={addtodohandler} className="flex">
        <input
          type="text"
          id="taskInput"
          placeholder="Enter task..."
          value={task}
          onChange={ (e)=>setTask(e.target.value)}
          className="flex-grow rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white px-4 py-2 m-0"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-r-lg bg-blue-500 text-white font-semibold border border-blue-500 border-l-0"
        >
          Add Task
        </button>
      </form>
    </>
  )
}

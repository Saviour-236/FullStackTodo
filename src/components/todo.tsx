import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoslice';
function todo() {
  const todos = useSelector(state => state.todos)
  const Dispatch = useDispatch();
  return (
    <>
<div className='border m-[1rem] p-[1rem] space-y-[1rem] rounded'>
      {todos.map((todo) => (
        <div key={todo.id} className=' flex'>
          <input
            type="text"
            value={todo.text}
            className=" flex-grow rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white px-4 py-2 m-0"
            readOnly
          />
          
          <button
            onClick={() => Dispatch(removeTodo(todo.id))}
            className="px-4 py-2 rounded-r-lg bg-blue-500 text-white font-semibold border border-blue-500 border-l-0"
          >
            X
          </button>
        </div>
      ))}
      </div>
    </>
  )
}

export default todo
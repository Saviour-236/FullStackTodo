import { useState } from 'react'
import './App.css'
import Addtodo from '../src/components/addtodo'
import Todo from '../src/components/todo'
function App() {

  return (
    <>
    <div className='border m-[0rem]'>Its your Todo Man 
     <Addtodo />
     <Todo/>
     </div>
    </>
  )
}

export default App

import {createSlice,nanoid} from '@reduxjs/toolkit'

const intiealState = {
    todos : [{
        id:'1',
        text:'hloo'
    }]
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState: intiealState,
    reducers: {
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
             state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            return state;
        }
    }
})
export const {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer
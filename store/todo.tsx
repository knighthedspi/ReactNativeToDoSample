import {
    createSlice, PayloadAction
} from '@reduxjs/toolkit';

export interface ToDo {
    id: string;
    task: string;
}

interface ToDoState {
    toDoList: Array<ToDo>
};

const initialState: ToDoState = {
    toDoList: []
} 

const todoSlice = createSlice({
    name: 'toDos',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.toDoList = [
                ...state.toDoList, 
                {
                    id: `TODO_${new Date().getTime()}`, 
                    task: action.payload
                }
            ];
        },
        update: (state, action: PayloadAction<ToDo>) => {
            let currentList: Array<ToDo> = state.toDoList;
            let updateToDo = action.payload;
            let itemIndex = currentList.findIndex(toDo => toDo.id === updateToDo.id); 
            state.toDoList = [
                ...currentList.slice(0, itemIndex),
                updateToDo,
                ...currentList.slice(itemIndex + 1)
            ];
        },
        remove: (state, action: PayloadAction<string>) => {
            state.toDoList = [
                ...state.toDoList.filter(toDo => toDo.id != action.payload)
            ];
        },
        updateOrder: (state, action: PayloadAction<ToDo[]>) => {
            state.toDoList = [
                ...action.payload
            ]
        }
    }
});

export const {add, update, remove, updateOrder} = todoSlice.actions;

export default todoSlice.reducer;
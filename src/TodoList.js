import React from 'react';
import './todolist.css';
import TodoItem from './TodoItem';
import { useTodoState } from './TodoContext';

//리스트를 묶어서 한번에 처리 - map()
function TodoList() {
    const todos = useTodoState();

    return (
        <div className="todolistbox">
            {
                todos.map(todo => (
                    <TodoItem
                        key={ todo.id }
                        id={ todo.id }
                        text={ todo.text }
                        chk={ todo.chk }
                    />
                ))
            }
        </div>
    );
}

export default TodoList;
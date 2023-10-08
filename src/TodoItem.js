import React from 'react';
import './todoitem.css';
import { MdDone, MdDelete } from 'react-icons/md';
//react-icons 라이브러리 중 아이콘 2개 불러옴
import { useTodoDispatch } from './TodoContext';

//각각 할일 정보를 표시
//체크박스 + 할일텍스트 + 마우스오버시 휴지통아이콘
function TodoItem({ id, text, chk }) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({ type : "TOGGLE", id });
    const onRemove = () => dispatch({ type : "REMOVE", id });

    return (
        <div className="todoitembox">
            <div
                className={ chk ? 'checkcircle active' : 'checkcircle' }
                onClick={ onToggle }
            >
                <MdDone />
            </div>
            <p>{ text }</p>
            <div className="remove" onClick={ onRemove }>
                <MdDelete />
            </div>
        </div>
    );
}

export default TodoItem;
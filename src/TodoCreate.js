import React, { useState } from 'react';
import './todocreate.css';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from './TodoContext';

//새로운 할일을 등록하는 컴포넌트
function TodoCreate() {
    //input에 적히는 value값 state
    const [value, setValue] = useState('');

    //입력폼이 보이는지/보이지 않는지 여부 결정
    const [open, setOpen] = useState(false);

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    //버튼클릭시 활성/비활성
    const onToggle = () =>  setOpen(!open);

    //입력폼의 데이터 변경
    const onChange = e => setValue(e.target.value);

    //엔터처리시 폼데이터 전송 = submit이벤트
    const onSubmit = e => {
        e.preventDefault(); //기본 이벤트 제거 - 폼의 데이터 전송을 막음
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                chk: false //등록되면 처음엔 false
            }
        });
        setValue(''); //값을 다시 비워둠
        setOpen(false); //입력폼 다시 닫히게 처리
        nextId.current += 1; //key값을 1씩 증가
    }

    return (
        <>
            <div className={open ? 'formWrap active' : 'formWrap'}>
                <form onSubmit={onSubmit}>
                    <input 
                        type="text" placeholder="할 일을 입력 후, Enter를 누르세요." 
                        onChange={onChange}
                        value={value}
                    />
                </form>
            </div>
            <div className="circleBox" onClick={onToggle}>
                <MdAdd />
            </div>
        </>
    );
}

export default TodoCreate;
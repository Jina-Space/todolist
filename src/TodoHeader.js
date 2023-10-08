import React from 'react';
import './todoheader.css';
import { useTodoState } from './TodoContext';

//오늘 날짜요일표시, 할일이 몇개 남았는지 표시
function TodoHeader() {
    const today = new Date(); //오늘의 날짜와 시간 담는 변수
    const week = ['일','월','화','수','목','금','토'];
    const dateString = {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        date: today.getDate(),
        day: today.getDay()
    }
    const { year, month, date, day } = dateString;

    const todos = useTodoState(); 

    //chk값이 true가 아닌 것만 반환
    const todosTasks = todos.filter(todo => !todo.chk);

    return (
        <div className="todoheader">
            <h1>{year}년 {month}월 {date}일</h1>
            <h2>{week[day]}요일</h2>
            <p>할일 { todosTasks.length }개 남음</p>
        </div>
    );
}

export default TodoHeader;
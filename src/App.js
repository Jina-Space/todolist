import React from 'react';
import './App.css';
import TodoBox from './TodoBox';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import { TodoProvider } from './TodoContext';


//명령확인구조
//1. TodoHeader : 할일 개수 관리
//2. TodoCreate : 할일 생성
//3. TodoList => TodoItem : 배열관리, 할일제거, 할일활성/비활성
// => 전부 전역관리해서 가져다 쓰고 싶은 컴포넌트가 가져다 쓰도록 처리

//Todo관련 Context들을 모든 컴포넌트가 사용할 수 있도록 TodoProvider를 불러와서 감싸줌
function App() {
  return (
    <TodoProvider>
      <TodoBox>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoBox>
    </TodoProvider>
  );
}

export default App;
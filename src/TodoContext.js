import React, { createContext, useContext, useReducer, useRef } from 'react';

//전역적으로 상태관리를 할 컴포넌트

//초기 배열 상태 선언(할일 리스트 선언)
const initialTodos = [
    {
        id: 1, //key
        text: '포트폴리오 만들기', //할일
        chk: true //체크모양 체크여부
    },
    {
        id: 2,
        text: '유럽여행가기',
        chk: true
    },
    {
        id: 3,
        text: '올해 안에 10kg빼기',
        chk: false
    },
    {
        id: 4,
        text: '올해 안에 책 12권 읽기',
        chk: false
    }
];

//리듀서로 state 업데이트 로직 구분
function todoReducer(state, action) {
    //이벤트 적용함수 3개 : 생성, 토글, 제거
    switch(action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => 
                todo.id === action.id ? { ...todo, chk: !todo.chk } : todo
            );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`에러발생상황 : ${action.type}`);
    }
}

//전역에서 사용할 Context API생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

//리듀서를 관리할 함수를 내보내기 
export function TodoProvider({ children }){
    const [state, dispatch] = useReducer(todoReducer,initialTodos);
    const nextId = useRef(5); //리렌더링될때마다 값이 변경되면 안됨 - 배열의 key가 4번까지라 다음 번호인 5번을 지정

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    { children }
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

//생성된 Context를 조회할 수 있는 useContext생성
export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context){
        throw new Error('TodoProvider 에러 발생');
    }
    return context;
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error('TodoProvider 에러 발생');
    }
    return context;
}

export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);
    if(!context){
        throw new Error('TodoProvider 에러 발생');
    }
    return context;
}
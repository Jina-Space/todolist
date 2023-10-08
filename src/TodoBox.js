import React from 'react';
import './todobox.css';

//컴포넌트 전체를 감싸는 흰색 영역파트
function TodoBox({ children }) {
    return (
        <div className="todobox">
            { children }
        </div>
    );
}

export default TodoBox;
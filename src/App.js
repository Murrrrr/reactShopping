import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(){
  let posts = '강남 고기 맛집';

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '바지 맛집 추천']);
  let [누른제목, 누른제목변경] = useState(0);

  return(
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={()=>{ 누른제목변경(0) }}>버튼1</button>
      <button onClick={()=>{ 누른제목변경(1) }}>버튼2</button>
      <button onClick={()=>{ 누른제목변경(2) }}>버튼3</button>

      {글제목.map(function(a, idx){
        return(
          <div className='list'>
            <h3 onClick={ ()=>{누른제목변경(idx)} }>{a}<span>?</span></h3>
            <p>2월 18일 발행</p>
            <hr />
          </div>
        )
          
        })
      }
      <Modal 글제목={글제목} 누른제목={누른제목}/>
    </div>
  )
}

function Modal(props){
  return(
    <div className='modal'>
      <h2>제목{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
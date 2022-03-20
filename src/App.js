/* eslint-disable*/

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { isCompositeComponent } from 'react-dom/test-utils';

function App(){
  let posts = '강남 고기 맛집';

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '바지 맛집 추천']);
<<<<<<< HEAD
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(true);
  let [누른제목, 누른제목변경] = useState(0);

  var array = [2, 3, 4];

  var newArray = array.map((a)=>{
    return a * 2;
  })

  console.log(newArray);

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }
=======
  let [누른제목, 누른제목변경] = useState(0);
>>>>>>> 5f8dcfce50d249f33ad6895dba21a7409621e9f1

  return(
    <div className="App">
      
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

<<<<<<< HEAD
      <button onClick={제목바꾸기}>버튼</button>

      {
        글제목.map((elem, idx)=>{
          return(
            <div className='list'>
              <h3 onClick={ ()=>{누른제목변경(idx)} }>{elem}<span onClick={ ()=>{따봉변경(따봉 + 1)}}>👍</span></h3>{따봉}
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          )
        })
      }

      <button onClick={ ()=>{modal변경(!modal)} }>열고닫기</button>

      {
        modal === true
        ? <Modal 글제목 = {글제목} 누른제목={누른제목}></Modal>
        : null
      }


      

    </div>
  )
}

function Modal(props){
  return(
    <div className="modal">
      <h2>제목 { props.글제목[props.누른제목] }</h2>
=======
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
>>>>>>> 5f8dcfce50d249f33ad6895dba21a7409621e9f1
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
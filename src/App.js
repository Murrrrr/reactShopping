/* eslint-disable*/

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { isCompositeComponent } from 'react-dom/test-utils';

function App(){
  return(
    <div>
      <Profile/>
    </div>
  )
}

class Profile extends React.Component{
  constructor(){
    super();
    this.state = { name: "Kim", age : 30}
  }

  render(){
    return(
      <div>
        <h3>저는 {this.state.name} 입니다.</h3>
      </div>
    )
  }
}

// function App(){
//   let posts = '강남 고기 맛집';

//   let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '바지 맛집 추천']);
//   let [따봉, 따봉변경] = useState(0);

//   let [modal, modal변경] = useState(true);
//   let [누른제목, 누른제목변경] = useState(0);

//   let [입력값, 입력값변경] = useState('');

//   var array = [2, 3, 4];

//   var newArray = array.map((a)=>{
//     return a * 2;
//   })


//   function 제목바꾸기(){
//     var newArray = [...글제목];
//     newArray[0] = '여자 코트 추천';
//     글제목변경(newArray);
//   }

//   return(
//     <div className="App">
      
//       <div className="black-nav">
//         <div>개발 Blog</div>
//       </div>

//       <button onClick={제목바꾸기}>버튼</button>

//       {
//         글제목.map((elem, idx)=>{
//           return(
//             <div className='list' key={idx}>
//               <h3 onClick={ ()=>{누른제목변경(idx)} }>{elem}<span onClick={ ()=>{따봉변경(따봉 + 1)}}>👍</span></h3>{따봉}
//               <p>2월 17일 발행</p>
//               <hr/>
//             </div>
//           )
//         })
//       }

//       <div className="publish">
//         <input type="text" value={입력값} onChange={(e)=>{입력값변경(e.target.value)}} id="input"/>
//         <button onClick={ ()=>{
//           // 입력값변경(document.querySelector('#input').value);
//           var newArray = [...글제목];
//           newArray.unshift(document.querySelector('#input').value);
//           글제목변경(newArray);

//           } }>저장</button>
//       </div>


//       <button onClick={ ()=>{modal변경(!modal)} }>열고닫기</button>

//       {
//         modal === true
//         ? <Modal 글제목 = {글제목} 누른제목={누른제목}></Modal>
//         : null
//       }


      

//     </div>
//   )
// }

// function Modal(props){
//   return(
//     <div className="modal">
//       <h2>제목 { props.글제목[props.누른제목] }</h2>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   )
// }

export default App;
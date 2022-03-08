import './App.css';

function App() {

  var data = "안녕하세요?";
  var className = "nav";

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <div className="content_list">
        <ul>
          <li>첫번째 글</li>
          <li>두번째 글</li>
          <li>세번째 글</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Tramlun';
  const age = 18;
  const isMale = false;

  // Ko thể render 1 object trực tiếp lên màn hình được
  // Chỉ render đc từng thuộc tính trong object đó lên thui
  const student = {
    name: 'Easy Frontend'
  };
  const colorList = ['red', 'green', 'blue']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.<br></br>TramHTK
        </p>
        <h1>Dinh Yêu Châm</h1>
        <h1>Dinh Yêu Châm</h1>

        <p>Xin chao {name} - {age} - {isMale ? 'Male' : 'Female'}</p>

        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {/* Yêu cầu bỏ trong 1 thằng cha, có thể là thẻ div */}
        {/* 3 dòng liền nhau */}
        {!isMale && (
          <div>
            <p>Female 1</p>
            <p>Female 2</p>
            <p>Female 3</p>
          </div>
        )}

        {/* Nếu ko thích bỏ dô thẻ div chỉ muốn hiển thị 3 dòng này thôi
        thì nhớ import thư viện React và thuộc tính React.Fragment */}
        {/* Muốn ko để trong thẻ div cha thì có Fragment */}
        {/* 3 dòng cách nhau từng dòng một */}
        {!isMale && (
          <React.Fragment>
            <p>Female 1</p>
            <p>Female 2</p>
            <p>Female 3</p>
          </React.Fragment>
        )}

        {/* Viết tắt của React.Fragment */}
        {/* 3 dòng cách nhau từng dòng một */}
        {!isMale && (
          <>
            <p>Female 1</p>
            <p>Female 2</p>
            <p>Female 3</p>
          </>
        )}

        <p>{student.name}</p>

        {/* ul là danh sách ko có thứ tự */}
        {/* li là mục của danh sách(component trong list) */}
        <ul>
          {colorList.map(color => (
            // Inline style
            // key là khóa độc nhất của từng component trong mảng
            <li key={color} style={{ color }}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

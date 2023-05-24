import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ClickGame from './ClickGame';
import HorizonLine from './HorizonLine';

// Home 컴포넌트
const Home = () => {
  return <h1>Home 페이지</h1>;
};

// Test 컴포넌트
const Test = () => {
  return <h1>Test 페이지</h1>;
};

// Game 컴포넌트
const Game = () => {
  return <ClickGame />;
};

// About 컴포넌트
const About = () => {
  return <h1>About 페이지</h1>;
};

const Menu = () => {
  return (
    <nav style={{ display: 'flex', alignItems: 'left', justifyContent: 'space-between' }}>
      <div>
        <li>
            <Link to="/">
              <img src="./logo.png" alt="로고" className="logo" style={{ width: 'auto', height: '100px' }} />
            </Link>
          </li>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ul style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
          <li>
            <Link to="/" className="menu-link">Home</Link>
          </li>
          <li>
            <Link to="/test" className="menu-link">Test</Link>
          </li>
          <li>
            <Link to="/game" className="menu-link">Game</Link>
          </li>
          <li>
            <Link to="/about" className="menu-link">About</Link>
          </li>
        </ul>
      </div>
      <div style={{ paddingTop: "10px" ,paddingLeft: '0px', paddingRight: "80px"}}>
        <img src="./gits.png" alt="이미지1" className="menu-image" style={{ width: '80px', height: '80px' }} />
        <img src="./gits.png" alt="이미지2" className="menu-image" style={{ width: 'auto', height: '80px' }} />
        <img src="./gits.png" alt="이미지3" className="menu-image" style={{ width: 'auto', height: '80px' }} />
      </div>
    </nav>
  );
};



// App 컴포넌트
const App = () => {
  return (
    <Router>
      <div>
        
        <Menu />
        <HorizonLine text="OR"/>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
          <Route path="/game" element={<Game />} /> {/* 수정된 부분 */}
          <Route path="/about" component={About} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

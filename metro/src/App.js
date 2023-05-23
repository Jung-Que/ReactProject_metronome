import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ClickGame from './ClickGame';

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

// 메뉴 컴포넌트
const Menu = () => {
  return (
    <nav>
      <ul>
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
    </nav>
  );
};

// App 컴포넌트
const App = () => {
  return (
    <Router>
      <div>
      <header>
        <img src="./logo.png" alt="로고" className="logo"
         style={{ width: 'auto', height: '100px' }} />
        </header>
        <Menu />
        <Routes>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src="./logo.png"
      alt="로고"
      className="logo"
      style={{ width: 'auto', height: '100px', marginRight: '10px' }}
    />
    <Route exact path="/" component={Home} />
    <Route path="/test" component={Test} />
    <Route path="/game" element={<Game />} /> {/* 수정된 부분 */}
    <Route path="/about" component={About} />
  </div>
</Routes>
      </div>
    </Router>
  );
};

export default App;

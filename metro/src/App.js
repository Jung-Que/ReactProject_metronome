import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ClickGame from './ClickGame';
import Homeabout from './home';
import HorizonLine from './HorizonLine';
import Tests from './testm';
import Abouts from './about';

// Home 컴포넌트
const Home = () => {
  return <Homeabout />;
};

// Test 컴포넌트
const Test = () => {
  return <ClickGame />;
};

// Game 컴포넌트
const Game = () => {
  return<Tests />;
};

// About 컴포넌트
const About = () => {
  return <Abouts />;
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
    <div style={{ paddingTop: "10px" ,paddingLeft: '100px', paddingRight: "50px"}}>
      <a href="https://github.com/Jung-Que/ReactProject_metronome" target="_blank">
        <img src="./gits.png" alt="이미지1" className="menu-image" style={{ width: '80px', height: '80px' }} />
      </a>
      </div>
    </nav>
  );
};

const Menuunder = () => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0px' }}>
      <div>
        <li>
          <Link to="/">
            <img src="./logo.png" alt="로고" className="logo" style={{ width: 'auto', height: '70px' }} />
          </Link>
        </li>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ color:"white",paddingRight:"50px",fontSize:"24px"}}>made by 20195249 정현서</p>
      </div>
    </nav>
  );
};



// App 컴포넌트
const App = () => {
  return (
    <Router>
      <div>
        <header>
        <Menu />
        </header>
        <div style={{height:"90px"}}>
        </div>
        <HorizonLine text=""/>
        <Routes>
          <Route exact path="/" element={<Homeabout/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/game" element={<Tests />} />
          <Route path="/about" element={<Abouts />} />
        </Routes>
      </div>
      <footer>
      <Menuunder />
        </footer>
    </Router>
  );
};

export default App;

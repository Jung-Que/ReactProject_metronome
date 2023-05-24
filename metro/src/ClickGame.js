import React, { useState, useEffect } from 'react';

const ClickGame = () => {
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [shapes, setShapes] = useState([]);
  const [clickTimes, setClickTimes] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleClick = (event) => {
    if (!isGameStarted) return;

    const { clientX, clientY } = event;
    setClickPosition({ x: clientX, y: clientY });
    createShape();
    updateClickTimes();
  };

  
  
  const createShape = () => {
    const backgroundWidth = window.innerWidth;
    const backgroundHeight = 500; // 100~700
    const randomX = Math.floor(Math.random() * backgroundWidth);
    const randomY = Math.floor(100 + Math.random() * backgroundHeight);
    const randomSize = Math.floor(Math.random() * 50) + 20;
    const randomRotation = Math.floor(Math.random() * 360);
    const shape = {
      x: randomX,
      y: randomY,
      size: randomSize,
      rotation: randomRotation,
      color: getRandomColor(),
      shape: getRandomShape(),
      visible: true,
      timestamp: Date.now(),
    };
    setShapes([...shapes, shape]);
  };

  const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const getRandomShape = () => {
    const shapes = ['square', 'circle', 'triangle'];
    const randomIndex = Math.floor(Math.random() * shapes.length);
    return shapes[randomIndex];
  };

  const updateClickTimes = () => {
    setClickTimes((prevClickTimes) => {
      if (prevClickTimes.length >= 10) {
        return prevClickTimes;
      }
      return [...prevClickTimes, Date.now()];
    });
  };

  useEffect(() => {
    if (clickTimes.length >= 10) {
      console.log(clickTimes);
      setClickTimes([]);
      setShapes([]);
      setIsGameStarted(false);
      setIsButtonVisible(true);
    }
  }, [clickTimes]);

  const handleStartClick = () => {
    setClickTimes([]);
    setIsGameStarted(true);
    setIsButtonVisible(false);
  };

  return (
    <div style={{ height: '800px', background: '#001f04', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onClick={handleClick}>
      {isButtonVisible && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button onClick={handleStartClick} style={{ marginTop: '350px', height: '100px', width: '100px', color: 'white' }}>
            Start
          </button>
          <p style={{ color: 'white', marginTop: '10px' }}>마우스 클릭</p>
        </div>
      )}
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      {shapes.map((shape, index) => {
          const { x, y, size, rotation, color, shape: shapeType, visible } = shape;
          const shapeStyle = {
            position: 'absolute',
            left: x,
            top: y,
            width: size,
            height: size,
            background: color,
            opacity: visible ? 1 : 0,
            transform: `rotate(${rotation}deg)`,
            transition: 'opacity 0.3s ease-out',
          };
  
          if (shapeType === 'square') {
            return <div key={index} style={shapeStyle} />;
          } else if (shapeType === 'circle') {
            return <div key={index} style={{ ...shapeStyle, borderRadius: '50%' }} />;
          } else if (shapeType === 'triangle') {
            return (
              <div
                key={index}
                style={{
                  ...shapeStyle,
                  width: 0,
                  height: 0,
                  borderLeft: `${size / 2}px solid transparent`,
                  borderRight: `${size / 2}px solid transparent`,
                  borderBottom: `${size}px solid ${color}`,
                }}
              />
            );
          }
  
          return null;
        })}
      </div>
    </div>
  );
};

export default ClickGame;

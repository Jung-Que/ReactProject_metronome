import React from 'react';
import { useState, useEffect } from 'react';
const Homeabout = () => {

  const [isContentVisible, setIsContentVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const sections = [ //시간 나면 mongodb 연결
    {
      image: 'test.PNG',
      title: 'Test',
      subtitle: '당신의 박자감을 테스트 해보세요!',
      content: '지금 듣고 있는 음악 bpm은 몇 일까요?',
    },
    {
      image: 'game.PNG',
      title: 'Game',
      subtitle: '우리가 즐겨듣는 노래는 몇 BPM일까요?',
      content: '동영상의 노래를 듣고 몇 BPM인지 맞춰 보세요.',
    },
    {
      image: 'about.PNG',
      title: 'About',
      subtitle: '개발자는 왜 이런 사이트를 만들었을까요?',
      content: '박자를 알아야하는 이유? 그리고 프로젝트 개발 배경',
    },
    {
      title: '', // 푸터바가 가리는 문제가 발생으로 가상 칸
      },
  ];
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    setIsContentVisible(scrollY <= 0);
  }, [scrollY]);

  return (
    <div>
     <div>
      {isContentVisible && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div style={{ textAlign: 'center' }}>
            <img src="logo.png" alt="로고" />
            <div style={{ marginTop: '20px', transition: 'opacity 0.5s', opacity: 1 }}>
              <h1>당신의 박자감을 시험, 발전 시켜보세요!</h1>
              <p>스크롤을 내려 컨텐츠를 살펴보세요</p>
            </div>
          </div>
        </div>
      )}

      <div style={{ paddingTop: '150px', paddingLeft: '150px', fontSize : "30px", fontStyle : 'italic' }}>
      <h2>Contents</h2>
      </div>
    </div>
    <div style={{ paddingTop: '30px', paddingLeft: '100px' }}>
      {sections.map((section, index) => (
        <div key={index}>
          <div style={{ display: 'flex', alignItems: 'normal' }}>
            <div>
              <img src={section.image} alt={`이미지 ${index + 1}`} style={{ width: '400px', height: '400px' }} />
            </div>
            <div style={{ marginLeft: '150px' }}>
              <h2 style={{ marginBottom: '0px',fontSize :"50px" }}>{section.title}</h2>
              <p style={{ marginBottom: '30px',fontSize :"30px",fontStyle :"italic" }}>{section.subtitle}</p>
              <p>{section.content}</p>
            </div>
          </div>
          {index < sections.length - 1 && (
            <hr
              style={{
                marginTop: '30px',
                marginBottom: '30px',
                width: '100%',
                borderColor: '#001f04',
                borderWidth: '2px',
                boxShadow: '0px 2px 6px #65f765',
              }}
            />
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Homeabout;
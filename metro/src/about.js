import React from 'react';
import { useState, useEffect } from 'react';
const Abouts = () => {
  const sections = [ //시간 나면 mongodb 연결
    {
      image: 'about.PNG',
      title: '20195249 정현서 연구프로젝트1 과제입니다.',
      subtitle: '이 사이트에서 당신의 박자감을 테스트 해보세요!',
      content: '지금 듣고 있는 음악 bpm은 몇 일까요? 나는 정확하게 박자를 칠수 있을까요?',
    },
     {
      image: 'back.PNG',
      title: '왜 이런 사이트를 만들었나요?',
      subtitle: '개발자가 박자를 잘 못맞춘다.',
      content: '본인 컴플렉스 개선을 위한 개발',
    },
    {
        image: 'life.PNG',
        title: '부가적인 이유?',
        subtitle: '박자를 잘맞추면 좋은게 많다!',
        content: '음악 분야 뿐만 아니라 심폐소생술에도 도움이 됩니다. 이미 음악의 박자를 활용한 심폐소생술 권장 공익 광고가 존재!',
      },
    {
      image: 'test.PNG',
      title: 'Home, Test, Game, About을 제공합니다',
      subtitle: '리액트의 라우터 기능을 활용해 개발했습니다.',
      content: '헤드바와 푸터바 사이 각 컨텐츠 제공.',
    },
   
    {
      title: '', // 푸터바가 가리는 문제가 발생으로 가상 칸
      },
  ];
  return (
    <div>
    <div style={{ paddingTop: '30px', paddingLeft: '100px' }}>
      {sections.map((section, index) => (
        <div key={index}>
          <div style={{ display: 'flex', alignItems: 'normal' }}>
            <div>
              <img src={section.image} alt={`이미지 ${index + 1}`} style={{ width: '400px', height: '400px', backgroundColor: '#65f765' }} />
            </div>
            <div style={{ marginLeft: '150px' }}>
              <h2 style={{ marginBottom: '0px',fontSize :"50px" }}>{section.title}</h2>
              <p style={{ marginBottom: '30px',fontSize :"30px",fontStyle :"italic" }}>{section.subtitle}</p>
              <p style={{ marginBottom: '0px',fontSize :"20px" }}>{section.content}</p>
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

export default Abouts;
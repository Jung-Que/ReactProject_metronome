import React, { useState } from 'react';
import './home.css';

const Tests = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [previousIndex, setPreviousIndex] = useState(null);

  const youtubeUrls = [
    {
      url: 'https://www.youtube.com/embed/lUAZUh1A3xE',
      hint: '200~250',
      value: 220,
      realValue: 222.22,
    },
    {
      url: 'https://www.youtube.com/embed/MU3u1EU182o',
      hint: '120~150',
      value: 130,
      realValue: 130,
    },
    {
        url: 'https://www.youtube.com/embed/_-LpDo9vVN8',
        hint: '130~160',
        value: 130,
        realValue: 128,
      },
      {
        url: 'https://www.youtube.com/embed/BBdC1rl5sKY',
        hint: '80~110',
        value: 100,
        realValue: 98,
      },
      {
        url: 'https://www.youtube.com/embed/4TWR90KJl84',
        hint: '90~120',
        value: 110,
        realValue: 109,
      },
  ];

  const handleStartClick = () => {
    setIsStarted(true);
    const availableUrls = youtubeUrls.filter((item, index) => index !== previousIndex);
    const randomIndex = availableUrls.length > 0 ? Math.floor(Math.random() * availableUrls.length) : null;
    if (randomIndex === null) {
      setVideoUrl('');
      setCurrentValue('');
      setIsCorrect(null);
      setPreviousIndex(null);
    } else {
      const selectedUrl = availableUrls[randomIndex];
      setVideoUrl(selectedUrl.url);
      setCurrentValue('');
      setIsCorrect(null);
      setPreviousIndex(randomIndex);
    }
  };

  const handleInputChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const handleCheckClick = () => {
    const currentUrl = youtubeUrls.find((item) => item.url === videoUrl);
    if (currentUrl && Number(currentValue) === currentUrl.value) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextClick = () => {
    setIsCorrect(null);
    handleStartClick();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '90px' }}>
      <h1>BPM 퀴즈</h1>
      <p>음악의 BPM을 맞춰보세요!</p>
      <button onClick={handleStartClick} className="button" style={{ marginBottom: '20px' }}>
        Start
      </button>

      {isStarted && (
        <div style={{ textAlign: 'center' }}>
          <div>
            <iframe
              width="1200px"
              height="600px"
              src={videoUrl}
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>

          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
            <input
              type="text"
              value={currentValue}
              onChange={handleInputChange}
              placeholder={youtubeUrls.find((item) => item.url === videoUrl)?.hint}
              style={{
                height: '50px',
                width: '300px',
                fontSize: '32px',
                backgroundColor: '#ffffff',
              }}
            />
            <div style={{ width: '20px' }}></div>
            <button onClick={handleCheckClick} className="button" style={{ marginBottom: '20px' }}>
              확인
            </button>
          </div>

          {isCorrect === true && (
            <p style={{ color: 'green',fontSize:'20px' }}>정답입니다!</p>
          )}

        {isCorrect === false && (
        <p style={{ color: 'red',fontSize:'20px' }}>틀렸습니다! 답: {youtubeUrls.find((item) => item.url === videoUrl)?.value} ({youtubeUrls.find((item) => item.url === videoUrl)?.realValue})</p>

        )}

          {isCorrect !== null && (
            <button onClick={handleNextClick} className="button" style={{ marginTop: '20px' }}>
              다음 문제
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Tests;

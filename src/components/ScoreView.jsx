import React from 'react';
import './ScoreView.css';
import image from '../images/image.jpg';
const ScoreView = ({ handleReset, score, questions }) => {
  return (
    <div>
      <p>
        Ваш результат{' '}
        {[...Array(score)].map((e, i) => (
          <img src={image} className="image" alt="score" key={i}></img>
        ))}{' '}
        из {questions.length}
      </p>
      <button onClick={handleReset}>Заново</button>
    </div>
  );
};

export default ScoreView;

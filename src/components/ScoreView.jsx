import React from 'react';
import './ScoreView.css';
import image from '../images/result3.png';
const ScoreView = ({ handleReset, score, questions }) => {
  return (
    <div>
      <p>Ваш результат: </p>
      <div className="imagecontainer">
        {[...Array(score)].map((e, i) => (
          <img src={image} className="image" alt="score" key={i}></img>
        ))}
      </div>

      <p>из {questions.length}</p>
      <button onClick={handleReset}>Заново</button>
    </div>
  );
};

export default ScoreView;

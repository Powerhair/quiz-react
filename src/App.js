import { useState } from 'react';
import './App.css';
import QuizView from './components/QuizView';
import ScoreView from './components/ScoreView';

function App() {
  const questions = [
    {
      question: 'Сколько Айнаш исполнилось?',
      answers: [
        { text: '9 862 Дня', isCorrect: true },
        { text: '26 лет' },
        { text: '16 лет' },
        { text: '21 038 400 минут' },
      ],
    },
    {
      question: 'С какого раза Айнаш сдала на права?',
      answers: [
        { text: '1' },
        { text: '6' },
        { text: '4', isCorrect: true },
        { text: 'Не сдала' },
      ],
    },
    {
      question: 'На каком этаже живет Айнаш?',
      answers: [
        { text: '2' },
        { text: '4', isCorrect: true },
        { text: '19' },
        { text: '-1' },
      ],
    },
    {
      question: 'Сколько раз Айнаш может поднять гирю?',
      answers: [
        { text: '5' },
        { text: '7' },
        { text: '100', isCorrect: true },
        { text: '8' },
      ],
    },
    {
      question: 'Какое место заняла Айнаш в заплыве 2022?',
      answers: [
        { text: '2', isCorrect: true },
        { text: '1' },
        { text: '28' },
        { text: '7' },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizOver, setiSQuizOver] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const next = currentQuestion + 1;

    if (next < questions.length) {
      setCurrentQuestion(next);
    } else setiSQuizOver(true);
  };
  const handleReset = () => {
    setCurrentQuestion(0);
    setiSQuizOver(false);
    setScore(0);
  };

  return (
    <div className="App">
      {isQuizOver ? (
        <ScoreView
          handleReset={handleReset}
          score={score}
          questions={questions}
        />
      ) : (
        <QuizView
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;

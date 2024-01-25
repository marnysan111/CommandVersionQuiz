import React, { useEffect, useState } from 'react';
import './App.css';
import version from './version.json'
import TopPage from './components/TopPage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';

interface Command {
  command: string;
  version_option: string;
}

function App() {
  const [page, setPage] = useState<'top' | 'quiz' | 'result'>('top');
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [answer, setAnswer] = useState<string[]>([])
  const [score, setScore] = useState<number>(0);
  const [commands, setCommands] = useState<Command[]>([])
  
  useEffect(() => {
    const randomCommands = version.sort(() => 0.5 - Math.random()).slice(0, 5);
    setCommands(randomCommands);
  }, [])

  const startQuiz = () => {
    setPage('quiz');
    setCurrentQuestion(1);
    setScore(0);
  };

  const nextQuestion = (ans:string) => {
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer((prevAnswers) => [...prevAnswers, ans]);
    } else {
      setAnswer((prevAnswers) => [...prevAnswers, ans]);
      setPage('result');
    }
  };
  return (
    <div>
      {page === 'top' && <TopPage onStart={startQuiz}/> }
      {page === 'quiz' && 
        <QuizPage 
          questionNumber={nextQuestion} 
          currentNumber={currentQuestion} 
          commandList={commands}
        />}
        {page === 'result' && 
          <ResultPage 
            answer={answer}
            commandList={commands}
          />
        }
    </div>
  );
}



export default App;

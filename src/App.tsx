import React, { useState } from "react";

export default function App() {
  // hard coded quiz questions/answers
  const questions = [
    {
      questionText: "ASAP Rocky's mother named him after...?",
      answerOptions: [
        { answerText: "Rocky Balboa", isCorrect: false },
        { answerText: "Rocky Marciano", isCorrect: false },
        { answerText: 'Rakim from "Eric.B. & Rakim"', isCorrect: true },
        { answerText: "Randomly", isCorrect: false },
      ],
    },
    {
      questionText: "What city is ASAP Rocky from?",
      answerOptions: [
        { answerText: "Manhattan", isCorrect: false },
        { answerText: "Harlem", isCorrect: true },
        { answerText: "Queens", isCorrect: false },
        { answerText: "Brooklyn", isCorrect: false },
      ],
    },
    {
      questionText: "What tattoo does ASAP Rocky have across his stomach?",
      answerOptions: [
        { answerText: "A$AP LIFE", isCorrect: true },
        { answerText: "A$AP WORLD", isCorrect: false },
        { answerText: "LIVE A$AP", isCorrect: false },
        { answerText: "LOVE A$AP", isCorrect: false },
      ],
    },
    {
      questionText: "What does ASAP stand for?",
      answerOptions: [
        { answerText: "As Soon As Possible", isCorrect: false },
        { answerText: "Anything Stands As Peace", isCorrect: false },
        { answerText: "Always Sing About Peace", isCorrect: false },
        { answerText: "Always Strive and Prosper", isCorrect: true },
      ],
    },
    {
      questionText: "What is ASAP Rocky's zodiac sign?",
      answerOptions: [
        { answerText: "Scorpio", isCorrect: false },
        { answerText: "Libra", isCorrect: true },
        { answerText: "Gemini", isCorrect: false },
        { answerText: "Taurus", isCorrect: false },
      ],
    },
    {
      questionText: "Aside from being in ASAP, Rocky is also part of...?",
      answerOptions: [
        { answerText: "AWGE", isCorrect: true },
        { answerText: "YG", isCorrect: false },
        { answerText: "Cactus Jack Records", isCorrect: false },
        { answerText: "Secret Sound Club", isCorrect: false },
      ],
    },
    {
      questionText: "ASAP Rocky said if he wasn't a rapper, he would be...?",
      answerOptions: [
        { answerText: "Singer", isCorrect: false },
        { answerText: "Photographer", isCorrect: false },
        { answerText: "Engineer", isCorrect: false },
        { answerText: "Interior Designer", isCorrect: true },
      ],
    },
    {
      questionText: "What is ASAP Rocky's producer name?",
      answerOptions: [
        { answerText: "Lord Flacko", isCorrect: true },
        { answerText: "Lord Flvcko", isCorrect: false },
        { answerText: "RockyTheProducer", isCorrect: false },
        { answerText: "ASAP R", isCorrect: true },
      ],
    },
    {
      questionText: "ASAP Rocky is featured in which game's soundtrack?",
      answerOptions: [
        { answerText: "Assassin's Creed: Valhalla", isCorrect: false },
        { answerText: "Cyberpunk 2077", isCorrect: true },
        { answerText: "Call of Duty: Cold War", isCorrect: false },
        { answerText: "Fortnite", isCorrect: true },
      ],
    },
    {
      questionText:
        "In Rocky's music video 'Fashion Killa' he co-stars with...?",
      answerOptions: [
        { answerText: "Kendall Jenner", isCorrect: false },
        { answerText: "Chanel Iman", isCorrect: false },
        { answerText: "Iggy Azalea", isCorrect: false },
        { answerText: "Rihanna", isCorrect: true },
      ],
    },
  ];

  // react states
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  const handleAnswerButtonClick = (isCurrent: boolean) => {
    if (isCurrent === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <button id="reset-quiz" onClick={() => resetQuiz()}>
            Reset Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

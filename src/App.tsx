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
    {
      questionText: "What was Rocky's debut mixtape called?",
      answerOptions: [
        { answerText: "Love. Live. A$AP", isCorrect: false },
        { answerText: "Live. Love. A$AP", isCorrect: true },
        { answerText: "A$AP", isCorrect: false },
        { answerText: "A$AP Rocky", isCorrect: false },
      ],
    },
    {
      questionText: "What age did Rocky start rapping?",
      answerOptions: [
        { answerText: "9", isCorrect: true },
        { answerText: "13", isCorrect: false },
        { answerText: "16", isCorrect: false },
        { answerText: "19", isCorrect: false },
      ],
    },
    {
      questionText:
        "In 2004, Rocky served jail time in Rikers Island for drug dealing. He shared a cell with future rapper _____",
      answerOptions: [
        { answerText: "ASAP Ferg", isCorrect: false },
        { answerText: "ASAP Nast", isCorrect: false },
        { answerText: "Casanova", isCorrect: true },
        { answerText: "ASAP Yams", isCorrect: false },
      ],
    },
    {
      questionText: "Rocky has dated which of these celebrities?",
      answerOptions: [
        { answerText: "Kendall Jenner", isCorrect: false },
        { answerText: "Chanel Iman", isCorrect: false },
        { answerText: "Iggy Azalea", isCorrect: false },
        { answerText: "All the above", isCorrect: true },
      ],
    },
    {
      questionText: "Rocky is ...?",
      answerOptions: [
        { answerText: "Vegan", isCorrect: true },
        { answerText: "Omnivore", isCorrect: false },
        { answerText: "Vegetarian", isCorrect: false },
        { answerText: "Pescetarian", isCorrect: false },
      ],
    },
    {
      questionText: "Rocky has a cousin that is also in ASAP Mob. Who is he?",
      answerOptions: [
        { answerText: "ASAP Nast", isCorrect: false },
        { answerText: "ASAP Ferg", isCorrect: true },
        { answerText: "ASAP Bari", isCorrect: false },
        { answerText: "ASAP Yams", isCorrect: true },
      ],
    },
    {
      questionText: "Where is Rocky's father from?",
      answerOptions: [
        { answerText: "Jamaica", isCorrect: false },
        { answerText: "America", isCorrect: false },
        { answerText: "Barbados", isCorrect: true },
        { answerText: "Nigeria", isCorrect: false },
      ],
    },
    {
      questionText:
        "For his first big tour, he was accompanied by fellow rappers ______",
      answerOptions: [
        { answerText: "ASAP Ferg and ASAP Bari", isCorrect: false },
        { answerText: "Drake and Kendrick Lamar", isCorrect: true },
        { answerText: "SpaceGhostPurrp and ASAP Twelvyy", isCorrect: false },
        { answerText: "Playboi Carti and Lil Uzi Vert", isCorrect: false },
      ],
    },
    {
      questionText: "In 2015, Rocky played 'Dom' in the movie _____",
      answerOptions: [
        { answerText: "Dope", isCorrect: true },
        { answerText: "Zoolander 2", isCorrect: false },
        { answerText: "All Rise", isCorrect: false },
        { answerText: "Animals", isCorrect: false },
      ],
    },
    {
      questionText: "What is the name of Rocky's debut album?",
      answerOptions: [
        { answerText: "HARLEM", isCorrect: false },
        { answerText: "ASAP Rocky", isCorrect: false },
        { answerText: "At. Long. Last. ASAP", isCorrect: false },
        { answerText: "Love. Live. ASAP", isCorrect: true },
      ],
    },
    {
      questionText:
        "In 2016, Rocky released a clothing line collaboration with...?",
      answerOptions: [
        { answerText: "Dior", isCorrect: false },
        { answerText: "Guess", isCorrect: true },
        { answerText: "Old Navy", isCorrect: false },
        { answerText: "Raf Simons", isCorrect: false },
      ],
    },
    {
      questionText: "In 2011, Rocky signed his first record deal with...?",
      answerOptions: [
        { answerText: "Sony Music Entertainment", isCorrect: true },
        { answerText: "RCA", isCorrect: false },
        { answerText: "Epic Records", isCorrect: false },
        { answerText: "Universal Music Group", isCorrect: false },
      ],
    },
    {
      questionText: "In his teens, Rocky started to sell which drug?",
      answerOptions: [
        { answerText: "DMT", isCorrect: false },
        { answerText: "Lean", isCorrect: false },
        { answerText: "LSD", isCorrect: false },
        { answerText: "Crack", isCorrect: true },
      ],
    },
    {
      questionText: "What is Rocky's legal middle name?",
      answerOptions: [
        { answerText: "Athelaston", isCorrect: true },
        { answerText: "Mayers", isCorrect: false },
        { answerText: "Rakim", isCorrect: false },
        { answerText: "Brown", isCorrect: true },
      ],
    },
    {
      questionText:
        "In 2015, Rocky's close friend and fellow ASAP Mob member passed away. Which member was it?",
      answerOptions: [
        { answerText: "ASAP Illz", isCorrect: false },
        { answerText: "ASAP Yams", isCorrect: true },
        { answerText: "ASAP Ferg", isCorrect: false },
        { answerText: "ASAP Bari", isCorrect: true },
      ],
    },
    {
      questionText:
        "In 2013, MTV Video Music Awards Japan gave Rocky the Best Hip-Hop Video award for which music video?",
      answerOptions: [
        { answerText: "Praise Da Lord", isCorrect: false },
        { answerText: "Angels", isCorrect: false },
        { answerText: "Peso", isCorrect: false },
        { answerText: "Fuckin' Problems", isCorrect: true },
      ],
    },
    {
      questionText: "Rakim is best friends with...?",
      answerOptions: [
        { answerText: "Travis Scott", isCorrect: false },
        { answerText: "Tyler, the Creator", isCorrect: true },
        { answerText: "Kanye West", isCorrect: false },
        { answerText: "SpaceGhostPurrp", isCorrect: false },
      ],
    },
    {
      questionText: "In 2019, Rocky was jailed in which foreign country?",
      answerOptions: [
        { answerText: "Sweden", isCorrect: true },
        { answerText: "China", isCorrect: false },
        { answerText: "Canada", isCorrect: false },
        { answerText: "North Korea", isCorrect: false },
      ],
    },
    {
      questionText: "Rocky's signature hair style is...?",
      answerOptions: [
        { answerText: "Corn Rows", isCorrect: false },
        { answerText: "Afro", isCorrect: false },
        { answerText: "French Braids", isCorrect: true },
        { answerText: "Buzzcut", isCorrect: false },
      ],
    },
    {
      questionText: "Aside from rapping, Rocky is best known for...?",
      answerOptions: [
        { answerText: "Philanthropy", isCorrect: false },
        { answerText: "Acting", isCorrect: false },
        { answerText: "Producing", isCorrect: false },
        { answerText: "Fashion", isCorrect: true },
      ],
    },
    {
      questionText: "Rocky is known to use which drug for inspiration?",
      answerOptions: [
        { answerText: "LSD", isCorrect: true },
        { answerText: "Crack", isCorrect: false },
        { answerText: "Lean", isCorrect: false },
        { answerText: "Adderall", isCorrect: false },
      ],
    },
  ];

  // react states
  const [currentQuestion, setCurrentQuestion] = useState(
    Math.floor(Math.random() * questions.length)
  ); // random question
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [numQuestions, setNumQuestions] = useState(0);
  const [questionArray, setQuestionArray] = useState([currentQuestion]);

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(Math.floor(Math.random() * questions.length));
    setShowScore(false);
    setNumQuestions(0);
    setQuestionArray([currentQuestion]);
  };

  const handleAnswerButtonClick = (isCurrent: boolean) => {
    let nextQ;

    if (isCurrent === true) {
      setScore(score + 1);
    }

    do {
      nextQ = Math.floor(Math.random() * questions.length);
      //console.log("duplicate, rerolling...");
    } while (questionArray.includes(nextQ));

    questionArray.push(nextQ);
    setNumQuestions(numQuestions + 1);

    if (numQuestions < 9) {
      setCurrentQuestion(nextQ);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of 10
          <button id="reset-quiz" onClick={() => resetQuiz()}>
            Reset Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {numQuestions + 1}</span>/10
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

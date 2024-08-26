//QUIZ GAME
import React, { useState } from 'react';
import './QuizGame.css';
const quizQuestions = [
    {
        question: "What does MUN stand for?",
        options: ["Model United Nations", "Modern United Nations", "Model Universal Network", "Modern Universal Network"],
        answer: "Model United Nations",
    },
    {
        question: "Which country is not a permanent member of the UN Security Council?",
        options: ["USA", "Russia", "Germany", "China"],
        answer: "Germany",
    },
    {
        question: "Which country was the first to sign the United Nations Charter in 1945?",
        options: [
          "United States",
          "United Kingdom",
          "France",
          "China"
        ],
        answer: "United States",
      },
      {
        question: "What is the main purpose of the United Nations?",
        options: [
          "To promote world peace",
          "To establish military alliances",
          "To regulate trade",
          "To manage national borders"
        ],
        answer: "To promote world peace",
      },
      {
        question: "How many permanent members are there in the UN Security Council?",
        options: [
          "5",
          "10",
          "15",
          "20"
        ],
        answer: "5",
      },
      {
        question: "Which of the following is NOT a primary organ of the United Nations?",
        options: [
          "General Assembly",
          "Security Council",
          "World Health Organization",
          "International Court of Justice"
        ],
        answer: "World Health Organization",
      },
      {
        question: "What document outlines the fundamental rights of individuals recognized by the UN?",
        options: [
          "Universal Declaration of Human Rights",
          "International Covenant on Civil and Political Rights",
          "Charter of the United Nations",
          "Declaration of the Rights of the Child"
        ],
        answer: "Universal Declaration of Human Rights",
      },
      {
        question: "Which country hosted the first Model United Nations conference?",
        options: [
          "United States",
          "Canada",
          "United Kingdom",
          "France"
        ],
        answer: "United States",
      },
      {
        question: "Which event is often considered the starting point of the United Nations?",
        options: [
          "The Treaty of Versailles",
          "The League of Nations",
          "The San Francisco Conference",
          "The signing of the Kyoto Protocol"
        ],
        answer: "The San Francisco Conference",
      },
      {
        question: "What is the name of the UN agency responsible for coordinating international public health?",
        options: [
          "UNICEF",
          "UNESCO",
          "WHO",
          "FAO"
        ],
        answer: "WHO",
      },
      {
        question: "Which of the following is a function of the UN General Assembly?",
        options: [
          "To make binding decisions",
          "To elect non-permanent members of the Security Council",
          "To oversee the UN budget",
          "To elect non-permanent members of the Security Council and to oversee the UN budget"
        ],
        answer: "Both B and C",
      },
      {
        question: "Which treaty established the International Criminal Court (ICC)?",
        options: [
          "The Rome Statute",
          "The Geneva Conventions",
          "The Hague Convention",
          "The Kyoto Protocol"
        ],
        answer: "The Rome Statute",
      },
      {
        question: "What is the maximum term length for a UN Secretary-General?",
        options: [
          "5 years",
          "10 years",
          "15 years",
          "There is no limit"
        ],
        answer: "5 years",
      },
      {
        question: "Which international organization focuses on economic cooperation and development?",
        options: [
          "NATO",
          "WTO",
          "OPEC",
          "UNDP"
        ],
        answer: "WTO",
      },
];

function QuizGame() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (selectedOption) => {
        if (selectedOption === quizQuestions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz-container">
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {quizQuestions.length}
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
                        </div>
                        <div className="question-text">{quizQuestions[currentQuestion].question}</div>
                    </div>
                    <div className="answer-section">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default QuizGame;

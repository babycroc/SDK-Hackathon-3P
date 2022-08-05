import React, { useEffect, useState } from "react";

import "./Main.css";

const randomQuizItems = [
    {
        "activity": "Do yoga",
        "type": "recreational",
        "participants": 1,
        "price": 0,
        "link": "",
        "key": "4688012",
        "accessibility": 0.9,
        "score": 0
    },
    {
        "activity": "Start a garden",
        "type": "recreational",
        "participants": 1,
        "price": 0.3,
        "link": "",
        "key": "1934228",
        "accessibility": 0.35,
        "score": 1
    },
    {
        "activity": "Fill out a basketball bracket",
        "type": "recreational",
        "participants": 1,
        "price": 0,
        "link": "",
        "key": "7806284",
        "accessibility": 0.1,
        "score": 2
    },
    {
        "activity": "Plan a trip to another country",
        "type": "recreational",
        "participants": 1,
        "price": 0,
        "link": "",
        "key": "5554727",
        "accessibility": 0,
        "score": 3
    }
];

function Main() {
    const [quizNumber, setQuizNumber] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [quizItems, setQuizItems] = useState([]);
    const [avatarImg, setAvatarImg] = useState("");

    const getNewQuizItems = () => {
        const newQuizItems = randomQuizItems
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        setQuizItems(newQuizItems);
    }

    const getNewAvatarImg = () => {
        const randomIndex = Math.floor(Math.random()*3 + 1);
        setAvatarImg(`lion${randomIndex}.png`);
    }

    useEffect(() => {
        getNewQuizItems();
        getNewAvatarImg();
    }, []);

    useEffect(() => {
        if(quizNumber === 10) {
            localStorage.setItem("score", currentScore);
            window.location.href = "/score";
        } else {
            getNewQuizItems();
            getNewAvatarImg()
        }
    }, [quizNumber]);

    const updateScore = (score) => {
        setCurrentScore(currentScore + score);
        setQuizNumber(quizNumber+1);
    }

    return (
        <div id="main-page">
            <div className="quiz-container">
                {quizItems.map(item => 
                    <button className="quiz-item" onClick={() => updateScore(item.score)}>
                        { item.activity }
                    </button>
                )}
            </div>
            <div className="avatar">
                <img src={`images/${avatarImg}`} alt="" />
            </div>
            <div className="score-box">
                점수 <br/>
                { currentScore }
            </div>
        </div>
    );
}

export default Main;
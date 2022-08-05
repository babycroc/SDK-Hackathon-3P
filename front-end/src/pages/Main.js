import React, { useEffect, useState } from "react";
import axios from "axios";

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
    const [clickAudio] = useState(new Audio("sounds/click.mp3"));

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
        const randomIndex = Math.floor(Math.random()*7 + 1);
        setAvatarImg(`avatar${randomIndex}.png`);
    }

    const getNewQuiz = () => {
        axios.get(`http://localhost:3007/problem`)
        .then(res => {
            const data = res.data;
            setQuizItems([data.choices[1], data.choices[2], data.choices[3], data.choices[4]]);
            setAvatarImg(`avatar${data.img.imgId}.png`);
        }).catch(error => {
            console.log(error);
        })
        console.log("hi" + quizNumber)
    }

    // useEffect(() => {
    //     // getNewQuizItems();
    //     // getNewAvatarImg();
    //     getNewQuiz();
    // }, []);

    useEffect(() => {
        if(quizNumber === 10) {
            localStorage.setItem("score", currentScore);
            window.location.href = "/score";
        } else {
            // getNewQuizItems();
            // getNewAvatarImg();
            getNewQuiz();
        }
    }, [quizNumber]);

    const updateScore = (score) => {
        clickAudio.pause();
        setCurrentScore(currentScore + score);
        setQuizNumber(quizNumber+1);
        clickAudio.play();
    }

    return (
        <div className="container">
            <div className="score-box">
                점수 <br/>
                { currentScore }
            </div>
            <div className="quiz-container">
                {quizItems.map((item, idx) => 
                    <button key={idx} className="quiz-item" onClick={() => updateScore(item.score)}>
                        { item.activity }
                    </button>
                )}
            </div>
            <div className="avatar">
                <img src={`images/${avatarImg}`} alt="" height="400px" />
            </div>
        </div>
    );
}

export default Main;
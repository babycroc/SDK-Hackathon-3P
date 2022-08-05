import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Score.css";

let scoreData = [
    {
        "nickname": "dora",
        "score": 18
    },
    {
        "nickname": "platypus",
        "score": 21
    },
    {
        "nickname": "macintosh",
        "score": 15
    },
    {
        "nickname": "night",
        "score": 10
    }
];

function Score() {
    const [endAudio] = useState(new Audio("sounds/end.mp3"));

    const [scoreList, setScoreList] = useState([]);
    const nickname = localStorage.getItem("nickname");
    const score = localStorage.getItem("score");

    const saveScore = () => {
        // scoreData.push({
        //     nickname: nickname,
        //     score: score
        // });
        axios.post(`http://localhost:3007/result`, {
            userName: nickname,
            scoreSum: score
        })
        .then(res => {
            console.log("Data saved");
        })
    }

    useEffect(() => {
        endAudio.play();
        saveScore();
        // const sortedScoreList = scoreData.sort((a, b) => b.score - a.score);
        // const removeDuplicates = sortedScoreList.filter((item, idx) => !(item.nickname === nickname && (idx !== 0 && sortedScoreList[idx-1].nickname === nickname && sortedScoreList[idx-1].score === score)));
        // setScoreList(removeDuplicates);
        axios.get(`http://localhost:3007/scoreboard`)
        .then(res => {
            const sortedScoreList = res.data.sort((a, b) => b.scoreSum - a.scoreSum).filter(x => x.scoreSum);
            const removeDuplicates = sortedScoreList.filter((item, idx) => !(idx !== 0 && sortedScoreList[idx-1].userName === nickname && sortedScoreList[idx-1].scoreSum === score));
            setScoreList(removeDuplicates);
        })
    }, []);

    return (
        <div id="score-page">
            <div className="left-panel">
                <div className="score-box">
                    { nickname }의 점수는 <br />
                    { score }
                </div>
                <div>
                    <img src="images/avatar0.png" width="300px" />
                </div>
            </div>
            <div className="right-panel">
                <table>
                    <thead>
                        <tr style={{ fontWeight: "bold" }}>
                            <td className="index"></td>
                            <td className="nickname">닉네임</td>
                            <td className="score">점수</td>
                        </tr>
                    </thead>
                    <tbody>
                        {scoreList.map((item, index) => {
                            return (
                                <tr>
                                    <td className="index">{ index + 1 }</td>
                                    <td className="nickname">{ item.userName }</td>
                                    <td className="score">{ item.scoreSum }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Score;
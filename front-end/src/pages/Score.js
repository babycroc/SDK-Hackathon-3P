import React, { useEffect, useState } from "react";

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
    const [scoreList, setScoreList] = useState([]);
    const nickname = localStorage.getItem("nickname");
    const score = localStorage.getItem("score");

    const saveScore = () => {
        scoreData.push({
            nickname: nickname,
            score: score
        });
    }

    useEffect(() => {
        saveScore();
        const sortedScoreList = scoreData.sort((a, b) => b.score - a.score);
        setScoreList(sortedScoreList);
    }, []);

    return (
        <div id="score-page">
            <div className="left-panel">
                <div className="score-box">
                    { nickname }의 점수는 <br />
                    { score }
                </div>
                <div>
                    <img src="images/lion1.png" />
                </div>
            </div>
            <div className="right-panel">
                <table>
                    <thead>
                        <tr>
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
                                    <td className="nickname">{ item.nickname }</td>
                                    <td className="score">{ item.score }</td>
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
import React from "react";
import "./Script.css";

function Script() {
    const redirectPage = () => {
        window.location.href = "/main";
    };
    
    return (
        <div className="script-page">
            <div className="container">
                <div id="title-box"><h3 id="title">심심한 김에 게임에 대해 더 말해볼게</h3></div>
                <span id="scription">
                심심이의 모습을 잘 관찰해서 심심이가 가장 좋아할 것 같은 활동을 골라주세요!<br/>
                심심이의 표정, 의상, 소품에서 심심이가 어떤 사람인지 알 수 있을 거에요. <br/>
                <br/>
                예시 : 심심이가 책을 읽고 있다면 아마 무언가를 배우는 걸 좋아하지도 몰라요!<br/>
                <br/>
                함께 추리력과 눈썰미를 발휘해보아요!<br/>
                </span>
                <div id="button-box"><button id="gamestart-btn" onClick={redirectPage}>START</button></div>
            </div>
        </div>
    )
}

export default Script;
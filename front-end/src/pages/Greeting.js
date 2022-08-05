import React from "react";
import "./Greeting.css";
import _Text from "../component/_Text";
import {NavLink} from "react-router-dom";


function Greeting () {
    const redirectPage = () => {
        window.location.href = "/script";
    };

    const greeting_text = ["안녕? 나는 심심이야.", 
    " 하…오늘도 너무 심심해 미칠 것 같아.",
    "뭔가 재미난 일을 해보고 싶은데 말이야..","어떤 활동을 해볼지 항상 고민이야.",
    "뭐? 네가 나를 도와주겠다고?",
    "(아니 내가 언제…?)",
    "도와주고 싶어서 미칠 것 같다고? 너 정말 좋은 친구구나! 정말 고마워!",
    "내 모습을 잘 관찰한 다음 내가 어떤 사람인지 잘 유추해봐.",
    "그런 다음 보기에서 가장 나랑 잘 어울릴 것 같은 활동을 골라주면 돼. 문제 없지?",
    "(어…어? 설명이 그게 다야?”)",
    "문제 없다고?",
    "좋아! 너의 눈썰미를 믿어보겠어!"];
    

    return (
        <div className="container">
            <div id="button-box">
                <button id="script-button" onClick={redirectPage} type="button">❓</button>
            </div>
            <div className="text_box">
                {greeting_text.map((txt, index) => <_Text key={index} text ={txt}/>)}
            </div>
            <div>
            <NavLink to={"/script"}><img id="greeting_image" src="images/avatar0.png" alt="안녕! 나는 심심이야!"/></NavLink>
            </div>  
        </div>
    );
}

export default Greeting;
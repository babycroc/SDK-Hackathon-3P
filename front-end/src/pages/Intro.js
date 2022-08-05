import React, { useState } from "react";

import "./Intro.css";

function Intro() {
    const [nickname, setNickname] = useState("");

    const handleChange = (e) => {
        setNickname(e.target.value);
    }

    const redirectPage = () => {
        if(nickname) {
            localStorage.setItem("nickname", nickname);
            window.location.href = "/greeting";
        } else {
            console.log("enter nickname");
        }
    }

    return (
        <div className="container">
            <div style={{ padding: "100px", paddingBottom:"30px"}}>
                <img src="images/gametitle.png"></img>
            </div>
            <div id="dev-box">
                <ul id="dev">
                    <li>👑  김건 - Backend + Illustrate </li>
                    <li>🐧 이지윤 - Frontend + Design</li>
                    <li>🎈 한수빈 - Frontend + Design</li> 
                </ul>
            </div>
            <div>
                <input type="text" id="nickname" value={nickname} placeholder="닉네임을 적어줘" onChange={handleChange} />
                <button id="start-button" onClick={redirectPage}>시작</button>
            </div>
        </div>
    );
}

export default Intro;
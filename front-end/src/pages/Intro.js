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
                    <li>π  κΉκ±΄ - Backend + Illustrate </li>
                    <li>π§ μ΄μ§μ€ - Frontend + Design</li>
                    <li>π νμλΉ - Frontend + Design</li> 
                </ul>
            </div>
            <div>
                <input type="text" id="nickname" value={nickname} placeholder="λλ€μμ μ μ΄μ€" onChange={handleChange} />
                <button id="start-button" onClick={redirectPage}>μμ</button>
            </div>
        </div>
    );
}

export default Intro;
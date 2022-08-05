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
        <div id="intro-page">
            <div style={{ padding: "100px" }}>
                <div id="intro-image"></div>
            </div>
            <div>
                <input type="text" id="nickname" value={nickname} onChange={handleChange} />
                <button id="start-button" onClick={redirectPage}>시작</button>
            </div>
        </div>
    );
}

export default Intro;
import React, { useState } from "react";
import './EightBall.css';

const EightBall = (props) => {
    const { answers } = props;

    const genRandom = () => Math.floor(Math.random() * (answers.length - 1)) + 1;

    const getAnswer = () => {
        const { msg, color } = answers[genRandom()];
        setMsg(msg);
        if (color === "green") {
            setStyle("green-message");
        }
        else if (color === "red") {
            setStyle("red-message");
        }
        else {
            setStyle("gold-message");
        }
    }

    const [msg, setMsg] = useState("Think of a Question");
    const [style, setStyle] = useState("initial");


    return (
        <>
            <div className={style}>
                <h4 className="text-message">{msg}</h4>
            </div>
            <button onClick={getAnswer}>Your Future</button>
        </>
    )
}

export default EightBall;
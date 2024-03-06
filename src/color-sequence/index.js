import React, { useEffect, useState } from "react";
import "./style.css";
import Rectangle from "./Rectangle";
import { shuffledButtons, shuffledColors } from "./shuffler";
import Button from "./button";

function ColorSequence() {
    const colorSequence = shuffledColors;
    const buttonSequence = shuffledButtons;

    const [userClickSequence, setUserClickSequence] = useState([]);
    const [sequenceCounter, setSequenceCounter] = useState(0);

    const [button1State, setButton1State] = useState({
        color: "lightgray",
    })
    const [button2State, setButton2State] = useState({
        color: "lightgray",
    })
    const [button3State, setButton3State] = useState({
        color: "lightgray",
    })
    const [button4State, setButton4State] = useState({
        color: "lightgray",
    })

    const setDefaultButtonColor = () => {
        setButton1State({color: "lightgray"});
        setButton2State({color: "lightgray"});
        setButton3State({color: "lightgray"});
        setButton4State({color: "lightgray"});
    }

    const resetGame = () => {
        setDefaultButtonColor();
        setUserClickSequence([]);
        setSequenceCounter(0);
    }

    const gameWon = () => {
        console.log("Congratulations! You won the game.");
        resetGame();
    }
    
    const checkSequence = (userClickSequence) => {
        const lastIndex = userClickSequence.length - 1;

        if (userClickSequence[lastIndex] !== colorSequence[lastIndex]) {
            resetGame();
        } else {
            (userClickSequence.length === colorSequence.length) ? gameWon() : setSequenceCounter(sequenceCounter+1);
        }
    };

    const handleOnClick = (event, buttonState) => {
        switch (buttonState) {
            case "button1State":
                setButton1State({color: buttonSequence[0]})
                setUserClickSequence([...userClickSequence, buttonSequence[0]]);
                checkSequence(userClickSequence);
                break;
            case "button2State":
                setButton2State({color: buttonSequence[1]});
                setUserClickSequence([...userClickSequence, buttonSequence[1]]);
                checkSequence(userClickSequence);
                break;
            case "button3State":
                setButton3State({color: buttonSequence[2]})
                setUserClickSequence([...userClickSequence, buttonSequence[2]]);
                checkSequence(userClickSequence);
                break;
            case "button4State":
                setButton4State({color: buttonSequence[3]})
                setUserClickSequence([...userClickSequence, buttonSequence[3]]);
                checkSequence(userClickSequence);
                break;
            default:
                resetGame();
                break;
        }
    };

    return (
    <div className="color_sequence_wrapper">
        <div className="rectangle_container">
        <Rectangle color={colorSequence[0]} />
        <Rectangle color={colorSequence[1]} />
        <Rectangle color={colorSequence[2]} />
        <Rectangle color={colorSequence[3]} />
        </div>

        <div className="button_container">
            <div className="button_row">
                <Button color={button1State.color} clicked={(event) => handleOnClick(event, "button1State")}/>
                <Button color={button2State.color} clicked={(event) => handleOnClick(event, "button2State")}/>
            </div>
            <div className="button_row">
                <Button color={button3State.color} clicked={(event) => handleOnClick(event, "button3State")}/>
                <Button color={button4State.color} clicked={(event) => handleOnClick(event, "button4State")}/>
            </div>
        </div>
    </div>
    );
}

export default ColorSequence;

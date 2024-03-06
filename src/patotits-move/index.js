import CustomButton from "./button";
import "./style.css";
import { jump, left, right, duck } from "./moves";
import { useEffect, useState } from "react";


function Patotits() {
    const [onHover, setOnHover] = useState(false);
    const [displayMove, setDisplayMove] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let intervalId;

        if (onHover && displayMove.length > 0) {
            // Start the infinite loop
            intervalId = setInterval(() => {
                setCounter((prevCounter) => (prevCounter + 1) % displayMove.length);
            }, 100); // Adjust the interval as needed
        }

        // Cleanup function to stop the loop when not hovering
        return () => {
            clearInterval(intervalId);
        };
    }, [onHover, displayMove]);

    const handleMouseEnter = (event) => {
        setOnHover(true);

        switch (event) {
            case "jump":
                setDisplayMove(jump);
                break;
            case "left":
                setDisplayMove(left);
                break;
            case "right":
                setDisplayMove(right);
                break;
            case "duck":
                setDisplayMove(duck);
                break;
            default:
                break;
        }
        
    }

    const handleMouseLeave = () => {
        setOnHover(false);
        setDisplayMove([]);
        setCounter(0);
    }

    return (
        <div className="patotits_wrapper">
            <div className="title_container">
                <h1>
                    Patotits
                </h1>
            </div>

            <div className="custom_button_container">
                <CustomButton label={"Jump"} onMouseEnter={() => handleMouseEnter("jump")} onMouseLeave={handleMouseLeave}/>
                <CustomButton label={"Left"} onMouseEnter={() => handleMouseEnter("left")} onMouseLeave={handleMouseLeave}/>
                <CustomButton label={"Right"} onMouseEnter={() => handleMouseEnter("right")} onMouseLeave={handleMouseLeave}/>
                <CustomButton label={"Duck"} onMouseEnter={() => handleMouseEnter("duck")} onMouseLeave={handleMouseLeave}/>
            </div>

            <div className="patotits_move_container">
                {onHover && displayMove.length > 0 && (
                    <img src={`./different-moves/${displayMove[counter]}`}
                        alt={`Move: ${displayMove[counter]}`}
                    />
                )}
            </div>

        </div>
    );
}

export default Patotits;
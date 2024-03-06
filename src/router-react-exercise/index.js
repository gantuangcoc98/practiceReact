import { useEffect, useState } from "react";
import Button  from "./button";

export default function CompleteLyrics() {
    const [currentSinger, setCurrentSinger] = useState({label: "none"});

    const [singer1, setSinger1] = useState({
        label: "singer1",
        color: "red",
        state: false,
    });
    const [singer2, setSinger2] = useState({
        label: "singer2",
        color: "#00ff80",
        state: false
    });
    const [singer3, setSinger3] = useState({
        label: "singer3",
        color: "#00ffff",
        state: false
    });
    const [singer4, setSinger4] = useState({
        label: "singer4",
        color: "#ff0080",
        state: false,
    });

    const reset = (singer) => {
        switch (singer) {
            case singer1:
                setSinger1({label: "singer1", color: "red", state: false});
                break;
            case singer2:
                setSinger2({label: "singer2", color: "#00ff80", state: false});
                break;
            case singer3:
                setSinger3({label: "singer3", color: "#00ffff", state: false});
                break;
            case singer4:
                setSinger4({label: "singer4", color: "#ff0080", state: false});
                break;
            default:
                setCurrentSinger({label: "none"});
                break;
        }

        console.log("Reset:", singer);
    }

    const handleClick = (singer) => {
        reset(currentSinger);

        switch (singer) {
            case singer1 :
                if (singer1.state) {
                    reset(singer1);
                } else {
                    setSinger1({label: "singer1", color: "#e60000", state: true});
                }
                
                break;
            case singer2 :
                setSinger2({label: "singer2", color: "#00e673", state: true});
                break;
            case singer3 :
                setSinger3({label: "singer3", color: "#00e6e6", state: true});
                break;
            case singer4 :
                setSinger4({label: "singer4", color: "#cc0066", state: true});
                break;
            default:
                break;
        }

        setCurrentSinger(singer);
    }

    useEffect(() => {
        console.log("Current:", currentSinger);
    }, [currentSinger])

    return (
        <div className="wrapper"
            style={
                {
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    margin: "50px 100px",
                    justifyContent: "center",
                    alignItems: "center",
                }
            }
        >
            <div className="button_container"
                style={
                    {
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                    }
                }
            >
                <Button color={singer1.color} clicked={(event)=> {handleClick(singer1)}} text={"Singer 1"}/>
                <Button color={singer2.color} clicked={(event)=> {handleClick(singer2)}} text={"Singer 2"}/>
                <Button color={singer3.color} clicked={(event)=> {handleClick(singer3)}} text={"Singer 3"}/>
                <Button color={singer4.color} clicked={(event)=> {handleClick(singer4)}} text={"Singer 4"}/>
            </div>
        </div>
    );
}
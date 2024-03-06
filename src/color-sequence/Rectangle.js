import "./style.css";

function Rectangle({color}) {
    return (
        <div className="rectangle"
            style={
                {
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                }
            }
        />
    );
}

export default Rectangle;
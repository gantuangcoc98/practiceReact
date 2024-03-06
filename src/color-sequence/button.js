import "./style.css";

function Button({color, clicked}) {

    return (
        <button
            style={
                {
                    backgroundColor: color,
                }
            }
            onClick={(event) => {
                clicked(event);
            }}
        />
    );
}

export default Button;
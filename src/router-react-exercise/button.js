function Button({color, clicked, text, border}) {

    return (
        <button
            style={
                {
                    backgroundColor: color,
                    color: "white",
                    fontWeight: "bold"
                }
            }
            onClick={(event) => {
                clicked(event);
            }}
        >{text}</button>
    );
}

export default Button;
import { Button } from "@mui/material";

const CustomButton = ({label, onMouseEnter, onMouseLeave}) => {
    return (
        <Button variant="contained"
            color="primary"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
                {label}
            </Button>
    )
}

export default CustomButton;
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { CSSProperties, FC, useState } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

type TodoItemCheckboxProps = {
    label: React.ReactNode;
}
const CustomTypography = styled(Typography)<{decoration?: CSSProperties['textDecoration']}>(({decoration}) => ({
    textDecoration: decoration ?? "none",
}))
const TodoItemCheckbox: FC<TodoItemCheckboxProps> = ({label}) => {
    const [check, setCheck] = useState<boolean>(false);
    return <FormControlLabel
        onChange={(_, e) => setCheck(e)}
        control={<Checkbox size="small" defaultChecked={check} checked={check}/>} label={
        <CustomTypography decoration={check ? "line-through" : "none"} variant="body2">{label}</CustomTypography>
    }/>
}

export default TodoItemCheckbox

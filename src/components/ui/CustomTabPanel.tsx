import { ReactNode } from "react";
import Box from "@mui/material/Box";

export type TabPanelProps =  {
    children?: ReactNode;
    index: number;
    value: number;
}

const CustomTabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`custom-tab-panel-${index}`}
            aria-labelledby={`custom-tab-panel-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

export default CustomTabPanel;

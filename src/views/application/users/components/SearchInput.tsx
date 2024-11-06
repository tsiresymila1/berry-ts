import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { IconSearch } from "@tabler/icons-react";
import Box from "@mui/material/Box";

const SearchInput = () => {
    return (
        <Box>
            <OutlinedInput
                id="input-search-header"
                value=""
                placeholder="Search"
                startAdornment={
                    <InputAdornment position="start">
                        <IconSearch stroke={1.5} size="16px"/>
                    </InputAdornment>
                }
                aria-describedby="search-helper-text"
                inputProps={{'aria-label': 'search', sx: {bgcolor: 'transparent', pl: 0.5}}}
                sx={{width: {md: 200, lg: 200}, ml: 2, px: 2}}
            />
        </Box>
    );
};

export default SearchInput;

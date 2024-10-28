import { FC, forwardRef, ReactNode, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Popper from '@mui/material/Popper';
import  { bindPopper, bindToggle, } from 'material-ui-popup-state';
import Transitions from "@/components/ui/extended/Transitions.tsx";
import { IconAdjustmentsHorizontal, IconSearch, IconX } from '@tabler/icons-react';
import { usePopupState } from "material-ui-popup-state/hooks";

// Type definitions for props
type HeaderAvatarProps = {
    children: ReactNode;
} & Record<string, any>

interface MobileSearchProps {
    value: string;
    setValue: (value: string) => void;
    popupState:  ReturnType<typeof usePopupState>;
}

const HeaderAvatar = forwardRef<HTMLDivElement, HeaderAvatarProps>(({children, ...others}, ref) => {
    const theme = useTheme();

    return (
        <Avatar
            ref={ref}
            variant="rounded"
            sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                bgcolor: 'secondary.light',
                color: 'secondary.dark',
                '&:hover': {
                    bgcolor: 'secondary.dark',
                    color: 'secondary.light'
                }
            }}
            {...others}
        >
            {children}
        </Avatar>
    );
});

// ==============================|| SEARCH INPUT - MOBILE ||============================== //

const MobileSearch: FC<MobileSearchProps> = ({value, setValue, popupState}) => {
    const theme = useTheme();
    return (
        <OutlinedInput
            id="input-search-header"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search"
            startAdornment={
                <InputAdornment position="start">
                    <IconSearch stroke={1.5} size="16px"/>
                </InputAdornment>
            }
            endAdornment={
                <InputAdornment position="end">
                    <HeaderAvatar>
                        <IconAdjustmentsHorizontal stroke={1.5} size="20px"/>
                    </HeaderAvatar>
                    <Box sx={{ml: 2}}>
                        <Avatar
                            variant="rounded"
                            sx={{
                                ...theme.typography.commonAvatar,
                                ...theme.typography.mediumAvatar,
                                bgcolor: 'orange.light',
                                color: 'orange.dark',
                                '&:hover': {
                                    bgcolor: 'orange.dark',
                                    color: 'orange.light'
                                }
                            }}
                            {...bindToggle(popupState)}
                        >
                            <IconX stroke={1.5} size="20px"/>
                        </Avatar>
                    </Box>
                </InputAdornment>
            }
            aria-describedby="search-helper-text"
            inputProps={{'aria-label': 'search', sx: {bgcolor: 'transparent', pl: 0.5}}}
            sx={{width: '100%', ml: 0.5, px: 2, bgcolor: 'background.paper'}}
        />
    );
};

// ==============================|| SEARCH INPUT ||============================== //

const SearchSection: FC = () => {
    const [value, setValue] = useState('');
    const popupState = usePopupState({variant: 'popover', popupId: 'demo-popup-popper'})


    return (
        <>
            <Box sx={{display: {xs: 'block', md: 'none'}}}>
                <>
                    <Box sx={{ml: 2}}>
                        <HeaderAvatar {...bindToggle(popupState)}>
                            <IconSearch stroke={1.5} size="19.2px"/>
                        </HeaderAvatar>
                    </Box>
                    <Popper
                        {...bindPopper(popupState)}
                        transition
                        sx={{zIndex: 1100, width: '99%', top: '-55px !important', px: {xs: 1.25, sm: 1.5}}}
                    >
                        {({TransitionProps}) => (
                            <Transitions type="zoom" {...TransitionProps} style={{transformOrigin: 'center left'}}>
                                <Card sx={{bgcolor: 'background.default', border: 0, boxShadow: 'none'}}>
                                    <Box sx={{p: 2}}>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid size="grow">
                                                <MobileSearch value={value} setValue={setValue}
                                                              popupState={popupState}/>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Card>
                            </Transitions>
                        )}
                    </Popper>
                </>
            </Box>
            <Box sx={{display: {xs: 'none', md: 'block'}}}>
                <OutlinedInput
                    id="input-search-header"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search"
                    startAdornment={
                        <InputAdornment position="start">
                            <IconSearch stroke={1.5} size="16px"/>
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position="end">
                            <HeaderAvatar>
                                <IconAdjustmentsHorizontal stroke={1.5} size="20px"/>
                            </HeaderAvatar>
                        </InputAdornment>
                    }
                    aria-describedby="search-helper-text"
                    inputProps={{'aria-label': 'search', sx: {bgcolor: 'transparent', pl: 0.5}}}
                    sx={{width: {md: 250, lg: 434}, ml: 2, px: 2}}
                />
            </Box>
        </>
    );
};

export default SearchSection;

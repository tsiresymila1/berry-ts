import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

import LogoSection from '../LogoSection';
import SearchSection from './SearchSection.tsx';
import NotificationSection from './NotificationSection';
import ProfileSection from './ProfilSection';

import { IconMenu2 } from '@tabler/icons-react';
import { FC } from "react";


interface HeaderProps {
    handleLeftDrawerToggle: () => void;
}

const Header: FC<HeaderProps> = ({handleLeftDrawerToggle}) => {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    width: 228,
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto',
                    },
                }}
            >
                <Box component="span" sx={{display: {xs: 'none', md: 'block'}, flexGrow: 1}}>
                    <LogoSection/>
                </Box>
                <ButtonBase sx={{borderRadius: '8px', overflow: 'hidden'}}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light,
                            },
                        }}
                        onClick={handleLeftDrawerToggle}
                        color="inherit"
                    >
                        <IconMenu2 stroke={1.5} size="1.3rem"/>
                    </Avatar>
                </ButtonBase>
            </Box>

            <SearchSection/>
            <Box sx={{flexGrow: 1}}/>

            <NotificationSection/>
            <ProfileSection/>
        </>
    );
};

export default Header;

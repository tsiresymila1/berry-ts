import { Outlet } from 'react-router-dom';

// material-ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import { styled, useTheme } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import Customization from '../Customization';
import Breadcrumbs from '@/components/ui/extended/Breadcrumbs';
import { useCustomizationStore } from '@/store/customization';
import { drawerWidth } from '@/store/constant';

// assets
import { IconChevronRight } from '@tabler/icons-react';
import { FC, useCallback } from "react";

const Main = styled('main', {
    shouldForwardProp: (prop) => prop !== 'open'
})<{open: boolean; theme: any}>(({open}) => {
    const theme = useTheme();
    return ({
        ...theme.typography.mainContent,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create(
            'margin',
            open
                ? {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen
                }
                : {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                }
        ),
        [theme.breakpoints.up('md')]: {
            marginLeft: open ? 0 : -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    })
});


const MainLayout: FC = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

    const {opened, setOpened} = useCustomizationStore()

    const handleLeftDrawerToggle = useCallback(() => {
        setOpened(!opened)
    }, [opened, setOpened]);

    return (
        <Box sx={{display: 'flex'}}>
            {/* header */}
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: opened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle}/>
                </Toolbar>
            </AppBar>
            {/* drawer */}
            <Sidebar drawerOpen={!matchDownMd ? opened : !opened}
                     drawerToggle={handleLeftDrawerToggle}/>

            {/* main content */}
            <Main open={opened} theme={undefined}>
                <Breadcrumbs separator={IconChevronRight} icon title rightAlign/>
                <Outlet/>
            </Main>
            <Customization/>
        </Box>
    );
};

export default MainLayout;

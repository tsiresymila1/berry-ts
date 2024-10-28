import { FC, useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

// project imports
import MenuCard from './MenuCard';
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
import Chip from '@/components/ui/extended/Chip';
import { drawerWidth } from '@/store/constant';


type SidebarProps = {
    drawerOpen: boolean;
    drawerToggle: () => void;
    window?: () => Window;
};

const Sidebar: FC<SidebarProps> = ({drawerOpen, drawerToggle, window}) => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    const drawerContent = useMemo(() => (
        <>
            <Box sx={{display: {xs: 'block', md: 'none'}}}>
                <Box sx={{display: 'flex', p: 2, mx: 'auto'}}>
                    <LogoSection/>
                </Box>
            </Box>
            <BrowserView>
                <PerfectScrollbar
                    component="div"
                    style={{
                        height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                    }}
                >
                    <MenuList/>
                    <MenuCard/>
                    <Stack direction="row" justifyContent="center" sx={{mb: 2}}>
                        <Chip
                            label={import.meta.env.VITE_APP_VERSION}
                            disabled
                            chipcolor="secondary"
                            size="small"
                            sx={{cursor: 'pointer'}}
                        />
                    </Stack>
                </PerfectScrollbar>
            </BrowserView>
            <MobileView>
                <Box sx={{px: 2}}>
                    <MenuList/>
                    <MenuCard/>
                    <Stack direction="row" justifyContent="center" sx={{mb: 2}}>
                        <Chip
                            label={import.meta.env.VITE_APP_VERSION}
                            disabled
                            chipcolor="secondary"
                            size="small"
                            sx={{cursor: 'pointer'}}
                        />
                    </Stack>
                </Box>
            </MobileView>
        </>
    ), [matchUpMd]);

    const container = window !== undefined ? () => window().document.body : undefined;

    // @ts-ignore
    return (
        <Box
            component="nav"
            sx={{flexShrink: {md: 0}, width: matchUpMd ? drawerWidth : 'auto'}}
            aria-label="mailbox folders"
        >
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        background: (theme.palette.dark as any)['900'],
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '88px',
                        },
                    },
                }}
                ModalProps={{keepMounted: true}}
                color="inherit"
            >
                {drawerContent}
            </Drawer>
        </Box>
    );
};

export default Sidebar;

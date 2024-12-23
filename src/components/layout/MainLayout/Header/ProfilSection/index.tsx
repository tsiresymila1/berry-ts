import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import MainCard from '@/components/ui/cards/MainCard.tsx';
import Transitions from '@/components/ui/extended/Transitions.tsx';
import UpgradePlanCard from './UpgradePlanCard.tsx';
import User1 from '@/assets/images/users/user-round.svg';

// assets
import { IconLogout, IconSearch, IconSettings, IconUser } from '@tabler/icons-react';
import { useCustomizationStore } from "@/store/customization.ts";

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection: FC = () => {
    const theme = useTheme();
    const customization = useCustomizationStore();
    const navigate = useNavigate();

    const [sdm, setSdm] = useState<boolean>(true);
    const [value, setValue] = useState<string>('');
    const [notification, setNotification] = useState<boolean>(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    const [open, setOpen] = useState<boolean>(false);

    const anchorRef = useRef<HTMLDivElement | null>(null);

    const prevOpen = useRef<boolean>(open);
    const inputProps = useMemo(() => ({
        'aria-label': 'weight'
    }), []);


    // const _handleLogout = useCallback(async () => {
    //     console.log('Logout');
    // }, []);

    const handleClose = useCallback((event: MouseEvent | TouchEvent): void => {
        if (anchorRef.current && !(anchorRef.current) || anchorRef.current?.contains(event.target as Node)) {
            return;
        }
        setOpen(false);
    }, [])

    const handleListItemClick = useCallback((event: MouseEvent, index: number, route: string = '') => {
        setSelectedIndex(index);
        handleClose(event);

        if (route && route !== '') {
            navigate(route);
        }
    }, [navigate, handleClose]);

    const handleToggle = useCallback(() => {
        setOpen((prevOpen) => !prevOpen);
    }, []);


    useEffect(() => {
        if (prevOpen.current && !open) {
            anchorRef.current?.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <Chip
                sx={{
                    height: '48px',
                    alignItems: 'center',
                    borderRadius: '27px',
                    transition: 'all .2s ease-in-out',
                    borderColor: theme.palette.primary.light,
                    backgroundColor: theme.palette.primary.light,
                    '&[aria-controls="menu-list-grow"], &:hover': {
                        borderColor: theme.palette.primary.main,
                        background: `${theme.palette.primary.main}!important`,
                        color: theme.palette.primary.light,
                        '& svg': {
                            stroke: theme.palette.primary.light
                        }
                    },
                    '& .MuiChip-label': {
                        lineHeight: 0
                    }
                }}
                icon={
                    <Avatar
                        src={User1}
                        sx={{
                            ...theme.typography.mediumAvatar,
                            margin: '8px 0 8px 8px !important',
                            cursor: 'pointer'
                        }}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        color="inherit"
                    />
                }
                label={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.primary.main}/>}
                variant="outlined"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="primary"
            />
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 14]
                            }
                        }
                    ]
                }}
            >
                {({TransitionProps}) => (
                    <Transitions in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard border={false} elevation={16} content={undefined} boxShadow
                                          shadow={theme.shadows[16]}>
                                    <Box sx={{p: 2, pb: 0}}>
                                        <Stack>
                                            <Stack direction="row" spacing={0.5} alignItems="center">
                                                <Typography variant="h4">Good Morning,</Typography>
                                                <Typography component="span" variant="h4" sx={{fontWeight: 400}}>
                                                    Johne Doe
                                                </Typography>
                                            </Stack>
                                            <Typography variant="subtitle2">Project Admin</Typography>
                                        </Stack>
                                        <OutlinedInput
                                            sx={{width: '100%', pr: 1, pl: 2, my: 2}}
                                            id="input-search-profile"
                                            value={value}
                                            onChange={(e) => setValue(e.target.value)}
                                            placeholder="Search profile options"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <IconSearch stroke={1.5} size="1rem"
                                                                color={theme.palette.grey[500]}/>
                                                </InputAdornment>
                                            }
                                            aria-describedby="search-helper-text"
                                            inputProps={inputProps}
                                        />
                                        <Divider/>
                                    </Box>
                                    <PerfectScrollbar
                                        style={{height: '100%', maxHeight: 'calc(100vh - 250px)', overflowX: 'hidden'}}>
                                        <Box sx={{p: 2, pt: 0}}>
                                            <UpgradePlanCard/>
                                            <Divider/>
                                            <Card
                                                sx={{
                                                    bgcolor: theme.palette.primary.light,
                                                    my: 2
                                                }}
                                            >
                                                <CardContent>
                                                    <Grid container spacing={3} direction="column">
                                                        <Grid>
                                                            <Grid container alignItems="center"
                                                                  justifyContent="space-between">
                                                                <Grid>
                                                                    <Typography variant="subtitle1">Start DND
                                                                        Mode</Typography>
                                                                </Grid>
                                                                <Grid>
                                                                    <Switch
                                                                        color="primary"
                                                                        checked={sdm}
                                                                        onChange={(e) => setSdm(e.target.checked)}
                                                                        name="sdm"
                                                                        size="small"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid>
                                                            <Grid container alignItems="center"
                                                                  justifyContent="space-between">
                                                                <Grid>
                                                                    <Typography variant="subtitle1">Allow
                                                                        Notifications</Typography>
                                                                </Grid>
                                                                <Grid>
                                                                    <Switch
                                                                        checked={notification}
                                                                        onChange={(e) => setNotification(e.target.checked)}
                                                                        name="sdm"
                                                                        size="small"
                                                                    />
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                            <Divider/>
                                            <List
                                                component="nav"
                                                sx={{
                                                    width: '100%',
                                                    maxWidth: 350,
                                                    minWidth: 300,
                                                    backgroundColor: theme.palette.background.paper,
                                                    borderRadius: '10px',
                                                    [theme.breakpoints.down('md')]: {
                                                        minWidth: '100%'
                                                    },
                                                    '& .MuiListItemButton-root': {
                                                        mt: 0.5
                                                    }
                                                }}
                                            >
                                                <ListItemButton
                                                    sx={{borderRadius: `${customization.borderRadius}px`}}
                                                    selected={selectedIndex === 0}
                                                    onClick={(event) => handleListItemClick(event as any, 0, '#')}
                                                >
                                                    <ListItemIcon>
                                                        <IconSettings stroke={1.5} size="1.3rem"/>
                                                    </ListItemIcon>
                                                    <ListItemText primary={<Typography variant="body2">Account
                                                        Settings</Typography>}/>
                                                </ListItemButton>
                                                <ListItemButton
                                                    sx={{borderRadius: `${customization.borderRadius}px`}}
                                                    selected={selectedIndex === 1}
                                                    onClick={(event) => handleListItemClick(event as any, 1, '#')}
                                                >
                                                    <ListItemIcon>
                                                        <IconUser stroke={1.5} size="1.3rem"/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={
                                                            <Grid container spacing={1} justifyContent="space-between">
                                                                <Grid>
                                                                    <Typography variant="body2">Social
                                                                        Profile</Typography>
                                                                </Grid>
                                                                <Grid>
                                                                    <Chip label="3" color="primary" size="small"/>
                                                                </Grid>
                                                            </Grid>
                                                        }
                                                    />
                                                </ListItemButton>
                                                <ListItemButton
                                                    sx={{borderRadius: `${customization.borderRadius}px`}}
                                                    selected={selectedIndex === 2}
                                                    onClick={(event) => handleListItemClick(event as any, 2, '#')}
                                                >
                                                    <ListItemIcon>
                                                        <IconLogout stroke={1.5} size="1.3rem"/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={<Typography variant="body2">Logout</Typography>}/>
                                                </ListItemButton>
                                            </List>
                                        </Box>
                                    </PerfectScrollbar>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </>
    );
};

export default ProfileSection;

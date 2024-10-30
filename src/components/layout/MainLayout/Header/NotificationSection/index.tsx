import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Material-UI
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonBase from '@mui/material/ButtonBase';

// Third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// Project imports
import MainCard from '@/components/ui/cards/MainCard';
import Transitions from '@/components/ui/extended/Transitions';
import NotificationList from './NotificationList';

// Assets
import { IconBell } from '@tabler/icons-react';

// Notification status options
const status = [
    {value: 'all', label: 'All Notification'},
    {value: 'new', label: 'New'},
    {value: 'unread', label: 'Unread'},
    {value: 'other', label: 'Other'}
];

// ==============================|| NOTIFICATION SECTION ||============================== //

const NotificationSection = () => {
    const theme = useTheme();
    const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string>('');
    const anchorRef = useRef<HTMLDivElement | null>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: MouseEvent | TouchEvent) => {
        if (anchorRef.current && anchorRef.current?.contains(event.target as Node)) {
            return;
        }
        setOpen(false);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current && !open) {
            anchorRef.current?.focus();
        }
        prevOpen.current = open;
    }, [open]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <>
            <Box
                sx={{
                    ml: 2,
                    mr: 3,
                    [theme.breakpoints.down('md')]: {
                        mr: 2
                    }
                }}
            >
                <ButtonBase sx={{borderRadius: '12px'}}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.mode == 'dark' ? theme.palette.background.paper : theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&[aria-controls="menu-list-grow"],&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        color="inherit"
                    >
                        <IconBell stroke={1.5} size="1.3rem"/>
                    </Avatar>
                </ButtonBase>
            </Box>
            <Popper
                placement={matchesXs ? 'bottom' : 'bottom-end'}
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
                                offset: [matchesXs ? 5 : 0, 20]
                            }
                        }
                    ]
                }}
            >
                {({TransitionProps}) => (
                    <Transitions position={matchesXs ? 'top' : 'top-right'} in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard border={false} elevation={16} content={undefined} boxShadow
                                          shadow={theme.shadows[16]}>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid size={12}>
                                            <Grid container alignItems="center" justifyContent="space-between"
                                                  sx={{pt: 2, px: 2}}>
                                                <Grid size="grow">
                                                    <Stack direction="row" spacing={2}>
                                                        <Typography variant="subtitle1">All Notification</Typography>
                                                        <Chip
                                                            size="small"
                                                            label="01"
                                                            sx={{
                                                                color: theme.palette.background.default,
                                                                bgcolor: theme.palette.warning.dark
                                                            }}
                                                        />
                                                    </Stack>
                                                </Grid>
                                                <Grid size="grow">
                                                    <Typography component={Link} to="#" variant="subtitle2"
                                                                color="primary">
                                                        Mark as all read
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid size={12}>
                                            <PerfectScrollbar style={{
                                                height: '100%',
                                                maxHeight: 'calc(100vh - 205px)',
                                                overflowX: 'hidden'
                                            }}>
                                                <Grid container direction="column" spacing={2}>
                                                    <Grid size={12}>
                                                        <Box sx={{px: 2, pt: 0.25}}>
                                                            <TextField
                                                                id="outlined-select-currency-native"
                                                                select
                                                                fullWidth
                                                                value={value}
                                                                onChange={handleChange}
                                                                SelectProps={{
                                                                    native: true
                                                                }}
                                                            >
                                                                {status.map((option) => (
                                                                    <option key={option.value} value={option.value}>
                                                                        {option.label}
                                                                    </option>
                                                                ))}
                                                            </TextField>
                                                        </Box>
                                                    </Grid>
                                                    <Grid size={12} p={0}>
                                                        <Divider sx={{my: 0}}/>
                                                    </Grid>
                                                </Grid>
                                                <NotificationList/>
                                            </PerfectScrollbar>
                                        </Grid>
                                    </Grid>
                                    <Divider/>
                                    <CardActions sx={{p: 1.25, justifyContent: 'center'}}>
                                        <Button size="small" disableElevation>
                                            View All
                                        </Button>
                                    </CardActions>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </>
    );
};

export default NotificationSection;

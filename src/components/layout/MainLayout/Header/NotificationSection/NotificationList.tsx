import { FC, PropsWithChildren, useMemo, Fragment } from 'react';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import Chip from '@/components/ui/extended/Chip.tsx';
import { IconBrandTelegram, IconBuildingStore, IconMailbox, IconPhoto } from '@tabler/icons-react';
import User1 from '@/assets/images/users/user-round.svg';


const ListItemWrapper: FC<PropsWithChildren> = ({children}) => (
    <Box
        sx={{
            p: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
            cursor: 'pointer',
            '&:hover': {
                bgcolor: 'primary.light',
            },
        }}
    >
        {children}
    </Box>
);

const NotificationList: FC = () => {
    const theme = useTheme();

    const chipStyles = useMemo(
        () => ({
            error: {
                height: 24,
                padding: '0 6px',
                color: theme.palette.orange.dark,
                backgroundColor: theme.palette.orange.light,
                marginRight: '5px',
            },
            warning: {
                height: 24,
                padding: '0 6px',
                color: theme.palette.warning.dark,
                backgroundColor: theme.palette.warning.light,
            },
            success: {
                height: 28,
                padding: '0 6px',
                color: theme.palette.success.dark,
                backgroundColor: theme.palette.success.light,
            },
        }),
        [theme.palette.orange.dark, theme.palette.orange.light, theme.palette.warning.dark, theme.palette.warning.light, theme.palette.success.dark, theme.palette.success.light]
    );

    const notifications = useMemo(
        () => [
            {
                id: 1,
                avatar: <Avatar alt="John Doe" src={User1}/>,
                primaryText: 'John Doe',
                secondaryText: 'It is a long established fact that a reader will be distracted',
                timestamp: '2 min ago',
                chips: [
                    {label: 'Unread', sx: chipStyles.error},
                    {label: 'New', sx: chipStyles.warning},
                ],
            },
            {
                id: 2,
                avatar: (
                    <Avatar
                        sx={{
                            color: theme.palette.success.dark,
                            backgroundColor: theme.palette.success.light,
                        }}
                    >
                        <IconBuildingStore stroke={1.5} size="1.3rem"/>
                    </Avatar>
                ),
                primaryText: <Typography variant="subtitle1">Store Verification Done</Typography>,
                secondaryText: 'We have successfully received your request.',
                timestamp: '2 min ago',
                chips: [{label: 'Unread', sx: chipStyles.error}],
            },
            {
                id: 3,
                avatar: (
                    <Avatar
                        sx={{
                            color: theme.palette.primary.dark,
                            backgroundColor: theme.palette.primary.light,
                        }}
                    >
                        <IconMailbox stroke={1.5} size="1.3rem"/>
                    </Avatar>
                ),
                primaryText: <Typography variant="subtitle1">Check Your Mail.</Typography>,
                secondaryText: 'All done! Now check your inbox as you’re in for a sweet treat!',
                timestamp: '2 min ago',
                action: (
                    <Button variant="contained" disableElevation
                            endIcon={<IconBrandTelegram stroke={1.5} size="1.3rem"/>}>
                        Mail
                    </Button>
                ),
            },
            {
                id: 4,
                avatar: <Avatar alt="John Doe" src={User1}/>,
                primaryText: <Typography variant="subtitle1">John Doe</Typography>,
                secondaryText: (
                    <Typography component="span" variant="subtitle2">
                        Uploaded two file on &nbsp;
                        <Typography component="span" variant="h6">
                            21 Jan 2020
                        </Typography>
                    </Typography>
                ),
                timestamp: '2 min ago',
                file: {
                    name: 'demo.jpg',
                    icon: <IconPhoto stroke={1.5} size="1.3rem"/>,
                },
            },
            {
                id: 5,
                avatar: <Avatar alt="John Doe" src={User1}/>,
                primaryText: <Typography variant="subtitle1">John Doe</Typography>,
                secondaryText: 'It is a long established fact that a reader will be distracted',
                timestamp: '2 min ago',
                chips: [{label: 'Confirmation of Account.', sx: chipStyles.success}],
            },
        ],
        [chipStyles.error, chipStyles.warning, theme.palette.success.dark, theme.palette.success.light, theme.palette.primary.dark, theme.palette.primary.light, chipStyles.success]
    );

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 330,
                py: 0,
                borderRadius: '10px',
                [theme.breakpoints.down('md')]: {
                    maxWidth: 300,
                },
                '& .MuiListItemSecondaryAction-root': {
                    top: 22,
                },
                '& .MuiDivider-root': {
                    my: 0,
                },
                '& .list-container': {
                    pl: 7,
                },
            }}
        >
            {notifications.map((notification) => (
                <Fragment key={notification.id}>
                    <ListItemWrapper>
                        <ListItem alignItems="center" secondaryAction={<Grid container justifyContent="flex-end">
                            <Grid size={12}>
                                <Typography variant="caption" display="block" gutterBottom>
                                    {notification.timestamp}
                                </Typography>
                            </Grid>
                        </Grid>}>
                            <ListItemAvatar>{notification.avatar}</ListItemAvatar>
                            <ListItemText primary={notification.primaryText}/>
                        </ListItem>
                        <Grid container direction="column" className="list-container">
                            <Grid size={12} sx={{pb: 2}}>
                                <Typography variant="subtitle2">{notification.secondaryText}</Typography>
                            </Grid>
                            <Grid size={12}>
                                <Grid container>
                                    {notification?.chips &&
                                        notification?.chips.map((chip, index) => (
                                            <Grid key={index}>
                                                <Chip label={chip.label} sx={chip.sx}/>
                                            </Grid>
                                        ))}
                                    {notification.file && (
                                        <Grid size={12}>
                                            <Card sx={{backgroundColor: theme.palette.secondary.light}}>
                                                <CardContent>
                                                    <Grid container direction="column">
                                                        <Grid xs={12}>
                                                            <Stack direction="row" spacing={2}>
                                                                {notification.file.icon}
                                                                <Typography
                                                                    variant="subtitle1">{notification.file.name}</Typography>
                                                            </Stack>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )}
                                    {notification?.action && (
                                        <Grid size="grow">
                                            {notification?.action}
                                        </Grid>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    </ListItemWrapper>
                    <Divider/>
                </Fragment>
            ))}
        </List>
    );
};

export default NotificationList;

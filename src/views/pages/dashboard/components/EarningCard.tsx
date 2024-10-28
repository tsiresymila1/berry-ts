import { MouseEvent, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from '@/components/ui/cards/MainCard';
import SkeletonEarningCard from '@/components/ui/cards/Skeleton/EarningCard';

// assets
import EarningIcon from '@/assets/images/icons/earning.svg';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import GetAppTwoToneIcon from '@mui/icons-material/GetAppOutlined';
import FileCopyTwoToneIcon from '@mui/icons-material/FileCopyOutlined';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfOutlined';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveOutlined';

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //
type EarningCardProps = {
    isLoading?: boolean
}
const EarningCard = ({isLoading}: EarningCardProps) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState<any>();

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard/>
            ) : (
                <MainCard
                    border={false}
                    content={undefined}
                    contentSX={{
                        padding: '16px'
                    }}
                    sx={{
                        bgcolor: 'secondary.dark',
                        color: '#fff',
                        overflow: 'hidden',
                        position: 'relative',
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            width: 210,
                            height: 210,
                            background: theme.palette.secondary[800],
                            borderRadius: '50%',
                            top: {xs: -105, sm: -85},
                            right: {xs: -140, sm: -95}
                        },
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            width: 210,
                            height: 210,
                            background: theme.palette.secondary[800],
                            borderRadius: '50%',
                            top: {xs: -155, sm: -125},
                            right: {xs: -70, sm: -15},
                            opacity: 0.5
                        }
                    }}
                >
                    <Box>
                        <Grid container direction="column">
                            <Grid size="auto">
                                <Grid container justifyContent="space-between">
                                    <Grid size="auto">
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.largeAvatar,
                                                bgcolor: 'secondary.800',
                                                mt: 1
                                            }}
                                        >
                                            <img src={EarningIcon} alt="Notification"/>
                                        </Avatar>
                                    </Grid>
                                    <Grid size="auto">
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.mediumAvatar,
                                                bgcolor: 'secondary.dark',
                                                color: 'secondary.200',
                                                zIndex: 1
                                            }}
                                            aria-controls="menu-earning-card"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                            <MoreHorizIcon fontSize="inherit"/>
                                        </Avatar>
                                        <Menu
                                            id="menu-earning-card"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            variant="selectedMenu"
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'right'
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right'
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <GetAppTwoToneIcon sx={{mr: 1.75}}/> Import Card
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <FileCopyTwoToneIcon sx={{mr: 1.75}}/> Copy Data
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <PictureAsPdfTwoToneIcon sx={{mr: 1.75}}/> Export
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ArchiveTwoToneIcon sx={{mr: 1.75}}/> Archive File
                                            </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size="auto">
                                <Grid container alignItems="center">
                                    <Grid size="auto">
                                        <Typography sx={{
                                            fontSize: '2.125rem',
                                            fontWeight: 500,
                                            mr: 1,
                                            mt: 1.75,
                                            mb: 0.75
                                        }}>$500.00</Typography>
                                    </Grid>
                                    <Grid size="auto">
                                        <Avatar
                                            sx={{
                                                cursor: 'pointer',
                                                ...theme.typography.smallAvatar,
                                                bgcolor: 'secondary.200',
                                                color: 'secondary.dark'
                                            }}
                                        >
                                            <ArrowUpwardIcon fontSize="inherit"
                                                             sx={{transform: 'rotate3d(1, 1, 1, 45deg)'}}/>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size="auto" sx={{mb: 1.25}}>
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        color: 'secondary.200'
                                    }}
                                >
                                    Total Earning
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </MainCard>
            )}
        </>
    );
};


export default EarningCard;


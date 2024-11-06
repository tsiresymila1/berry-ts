import { MouseEvent, useState } from 'react';

// material-ui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

// project imports
import BajajAreaChartCard from './BajajAreaChartCard';
import MainCard from '@/components/ui/cards/MainCard';
import SkeletonPopularCard from '@/components/ui/cards/Skeleton/PopularCard';
import { gridSpacing } from '@/store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

type PopularCardProps = {
    isLoading?: boolean
}
const PopularCard = ({isLoading}: PopularCardProps) => {
    const [anchorEl, setAnchorEl] = useState<any>();

    const handleClick = (event: MouseEvent<SVGSVGElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard/>
            ) : (
                <MainCard content={undefined}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid size={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid size="grow">
                                        <Typography variant="h4">Popular Stocks</Typography>
                                    </Grid>
                                    <Grid>
                                        <MoreHorizOutlinedIcon
                                            fontSize="small"
                                            sx={{
                                                color: 'primary.200',
                                                cursor: 'pointer'
                                            }}
                                            aria-controls="menu-popular-card"
                                            aria-haspopup="true"
                                            onClick={(e) => handleClick(e)}
                                        />
                                        <Menu
                                            id="menu-popular-card"
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
                                            <MenuItem onClick={handleClose}> Today</MenuItem>
                                            <MenuItem onClick={handleClose}> This Month</MenuItem>
                                            <MenuItem onClick={handleClose}> This Year </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid size={12}>
                                <BajajAreaChartCard/>
                            </Grid>
                            <Grid size={12}>
                                <Grid container direction="column">
                                    <Grid size="grow">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid size="grow">
                                                <Typography variant="subtitle1" color="inherit">
                                                    Bajaj Finery
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $1839.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                bgcolor: 'success.light',
                                                                color: 'success.dark',
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small"
                                                                                         color="inherit"/>
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid size="grow">
                                        <Typography variant="subtitle2" sx={{color: 'success.dark'}}>
                                            10% Profit
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{my: 1.5}}/>
                                <Grid container direction="column">
                                    <Grid size="grow">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid size="grow">
                                                <Typography variant="subtitle1" color="inherit">
                                                    TTML
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $100.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                bgcolor: 'orange.light',
                                                                color: 'orange.dark',
                                                                marginLeft: 1.875
                                                            }}
                                                        >
                                                            <KeyboardArrowDownOutlinedIcon fontSize="small"
                                                                                           color="inherit"/>
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid size="grow">
                                        <Typography variant="subtitle2" sx={{color: 'orange.dark'}}>
                                            10% loss
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{my: 1.5}}/>
                                <Grid container direction="column">
                                    <Grid size="grow">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid size="grow">
                                                <Typography variant="subtitle1" color="inherit">
                                                    Reliance
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $200.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                bgcolor: 'success.light',
                                                                color: 'success.dark',
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small"
                                                                                         color="inherit"/>
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid size="grow">
                                        <Typography variant="subtitle2" sx={{color: 'success.dark'}}>
                                            10% Profit
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{my: 1.5}}/>
                                <Grid container direction="column">
                                    <Grid size="grow">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid size="grow">
                                                <Typography variant="subtitle1" color="inherit">
                                                    TTML
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $189.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                bgcolor: 'orange.light',
                                                                color: 'orange.dark',
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowDownOutlinedIcon fontSize="small"
                                                                                           color="inherit"/>
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid size="grow">
                                        <Typography variant="subtitle2" sx={{color: 'orange.dark'}}>
                                            10% loss
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider sx={{my: 1.5}}/>
                                <Grid container direction="column">
                                    <Grid size="grow">
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Grid size="grow">
                                                <Typography variant="subtitle1" color="inherit">
                                                    Stolon
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            $189.00
                                                        </Typography>
                                                    </Grid>
                                                    <Grid>
                                                        <Avatar
                                                            variant="rounded"
                                                            sx={{
                                                                width: 16,
                                                                height: 16,
                                                                borderRadius: '5px',
                                                                bgcolor: 'orange.light',
                                                                color: 'orange.dark',
                                                                ml: 2
                                                            }}
                                                        >
                                                            <KeyboardArrowDownOutlinedIcon fontSize="small"
                                                                                           color="inherit"/>
                                                        </Avatar>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid size="grow">
                                        <Typography variant="subtitle2" sx={{color: 'orange.dark'}}>
                                            10% loss
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions sx={{p: 1.25, pt: 0, justifyContent: 'center'}}>
                        <Button size="small" disableElevation>
                            View All
                            <ChevronRightOutlinedIcon/>
                        </Button>
                    </CardActions>
                </MainCard>
            )}
        </>
    );
};


export default PopularCard;


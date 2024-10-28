import { MouseEvent, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

// third-party
import Chart from 'react-apexcharts';

// project imports
import MainCard from '@/components/ui/cards/MainCard';
import SkeletonTotalOrderCard from '@/components/ui/cards/Skeleton/EarningCard';

import ChartDataMonth from '../data/total-order-month-line-chart';
import ChartDataYear from '../data/total-order-year-line-chart';

// assets
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //
type TotalOrderLineChartCardProps = {
    isLoading?: boolean
}
const TotalOrderLineChartCard = ({isLoading}: TotalOrderLineChartCardProps) => {
    const theme = useTheme();

    const [timeValue, setTimeValue] = useState(false);

    const handleChangeTime = (_: MouseEvent<HTMLButtonElement>, newValue: boolean) => {
        setTimeValue(newValue);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonTotalOrderCard/>
            ) : (
                <MainCard
                    border={false}
                    content={undefined}
                    contentSX={{
                        padding: '16px'
                    }}
                    sx={{
                        bgcolor: theme.palette.mode === 'dark' ? 'background.paper': 'primary.dark',
                        color: '#fff',
                        overflow: 'hidden',
                        position: 'relative',
                        height: '100%',
                        '&>div': {
                            position: 'relative',
                            zIndex: 5
                        },
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            width: 210,
                            height: 210,
                            background: theme.palette.primary[800],
                            borderRadius: '50%',
                            top: {xs: -105, sm: -85},
                            right: {xs: -140, sm: -95}
                        },
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            width: 210,
                            height: 210,
                            background: theme.palette.primary[800],
                            borderRadius: '50%',
                            top: {xs: -155, sm: -125},
                            right: {xs: -70, sm: -15},
                            opacity: 0.5
                        }
                    }}
                >
                    <Box>
                        <Grid container direction="column">
                            <Grid>
                                <Grid container justifyContent="space-between">
                                    <Grid>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.largeAvatar,
                                                bgcolor: 'primary.800',
                                                color: '#fff',
                                                mt: 1
                                            }}
                                        >
                                            <LocalMallOutlinedIcon fontSize="inherit"/>
                                        </Avatar>
                                    </Grid>
                                    <Grid>
                                        <Button
                                            disableElevation
                                            variant={timeValue ? 'contained' : 'text'}
                                            size="small"
                                            sx={{color: 'inherit'}}
                                            onClick={(e) => handleChangeTime(e, true)}
                                        >
                                            Month
                                        </Button>
                                        <Button
                                            disableElevation
                                            variant={!timeValue ? 'contained' : 'text'}
                                            size="small"
                                            sx={{color: 'inherit'}}
                                            onClick={(e) => handleChangeTime(e, false)}
                                        >
                                            Year
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid sx={{mb: 0.75}}>
                                <Grid container alignItems="center">
                                    <Grid size={{xs: 6}}>
                                        <Grid container alignItems="center">
                                            <Grid>
                                                {timeValue ? (
                                                    <Typography sx={{
                                                        fontSize: '2.125rem',
                                                        fontWeight: 500,
                                                        lineHeight: '1.334em',
                                                        mr: 1,
                                                        mt: 1.75,
                                                        mb: 0.75
                                                    }}>$108</Typography>
                                                ) : (
                                                    <Typography sx={{
                                                        fontSize: '2.125rem',
                                                        lineHeight: '1.334em',
                                                        fontWeight: 500,
                                                        mr: 1,
                                                        mt: 1.75,
                                                        mb: 0.75
                                                    }}>$961</Typography>
                                                )}
                                            </Grid>
                                            <Grid>
                                                <Avatar
                                                    sx={{
                                                        ...theme.typography.smallAvatar,
                                                        cursor: 'pointer',
                                                        bgcolor: 'primary.200',
                                                        color: 'primary.dark'
                                                    }}
                                                >
                                                    <ArrowDownwardIcon fontSize="inherit"
                                                                       sx={{transform: 'rotate3d(1, 1, 1, 45deg)'}}/>
                                                </Avatar>
                                            </Grid>
                                            <Grid size={12}>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 700,
                                                        color: 'primary.200'
                                                    }}
                                                >
                                                    Total Order
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid size={{xs: 6}}>
                                        {timeValue ? <Chart {...ChartDataMonth} /> : <Chart {...ChartDataYear} />}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </MainCard>
            )}
        </>
    );
};

export default TotalOrderLineChartCard;

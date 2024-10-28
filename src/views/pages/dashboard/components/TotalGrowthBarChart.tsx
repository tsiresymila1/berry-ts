import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// third-party
import ApexCharts from 'apexcharts';
import Chart, { Props } from 'react-apexcharts';

// project imports
import SkeletonTotalGrowthBarChart from '@/components/ui/cards/Skeleton/TotalGrowthBarChart';
import MainCard from '@/components/ui/cards/MainCard';
import { gridSpacing } from '@/store/constant';

// chart data
import chartData from '../data/total-growth-bar-chart';

const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ==============================|| DASHBOARD DEFAULT - TOTAL GROWTH BAR CHART ||============================== //
type TotalGrowthBarChartProps = {
    isLoading?: boolean
}
const TotalGrowthBarChart = ({isLoading}: TotalGrowthBarChartProps) => {
    const [value, setValue] = useState('today');
    const theme = useTheme();

    const {primary} = theme.palette.text;
    const divider = theme.palette.divider;
    const grey500 = theme.palette.grey[500];


    useEffect(() => {
        const newChartData: Props = {
            ...chartData.options,
            colors: [theme.palette.primary[200], theme.palette.primary.dark, theme.palette.secondary.main, theme.palette.secondary.light],
            xaxis: {
                labels: {
                    style: {
                        colors: [primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary, primary]
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [primary]
                    }
                }
            },
            grid: {borderColor: divider},
            tooltip: {
                theme: 'light'
            },
            legend: {
                labels: {
                    colors: grey500
                }
            }
        };
        // do not load chart when loading
        if (!isLoading) {
            ApexCharts.exec(`bar-chart`, 'updateOptions', newChartData);
        }
    }, [theme, primary, divider, isLoading, grey500]);

    return (
        <>
            {isLoading ? (
                <SkeletonTotalGrowthBarChart/>
            ) : (
                <MainCard>
                    <Grid container spacing={gridSpacing}>
                        <Grid size={12}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid>
                                    <Grid container direction="column" spacing={1}>
                                        <Grid>
                                            <Typography variant="subtitle2">Total Growth</Typography>
                                        </Grid>
                                        <Grid>
                                            <Typography variant="h3">$2,324.00</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid>
                                    <TextField id="standard-select-currency" select value={value}
                                               onChange={(e) => setValue(e.target.value)}>
                                        {status.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            size={12}
                            sx={{
                                '& .apexcharts-menu.apexcharts-menu-open': {
                                    bgcolor: 'background.paper'
                                }
                            }}
                        >
                            <Chart {...chartData} />
                        </Grid>
                    </Grid>
                </MainCard>
            )}
        </>
    );
};


export default TotalGrowthBarChart;

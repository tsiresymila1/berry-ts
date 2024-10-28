import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid2';

// project imports
import EarningCard from './components/EarningCard';
import PopularCard from './components/PopularCard';
import TotalOrderLineChartCard from './components/TotalOrderLineChartCard';
import TotalIncomeDarkCard from './components/TotalIncomeDarkCard';
import TotalIncomeLightCard from './components/TotalIncomeLightCard';
import TotalGrowthBarChart from './components/TotalGrowthBarChart';

import { gridSpacing } from '@/store/constant';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import { Container } from "@mui/material";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const DashboardPage = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Container maxWidth="xl">
            <Grid container spacing={gridSpacing}>
                <Grid size={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid size={{lg: 4, md: 6, sm: 6, xs: 12}}>
                            <EarningCard isLoading={isLoading}/>
                        </Grid>
                        <Grid size={{lg: 4, md: 6, sm: 6, xs: 12}}>
                            <TotalOrderLineChartCard isLoading={isLoading}/>
                        </Grid>
                        <Grid size={{lg: 4, md: 12, sm: 12, xs: 12}}>
                            <Grid container spacing={gridSpacing}>
                                <Grid size={{lg: 12, md: 6, sm: 6, xs: 12}}>
                                    <TotalIncomeDarkCard isLoading={isLoading}/>
                                </Grid>
                                <Grid size={{lg: 12, md: 6, sm: 6, xs: 12}}>
                                    <TotalIncomeLightCard
                                        {...{
                                            isLoading: isLoading,
                                            total: 203,
                                            label: 'Total Income',
                                            icon: <StorefrontTwoToneIcon fontSize="inherit"/>
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid size={{md: 8, xs: 12}}>
                            <TotalGrowthBarChart isLoading={isLoading}/>
                        </Grid>
                        <Grid size={{md: 4, xs: 12}}>
                            <PopularCard isLoading={isLoading}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DashboardPage;

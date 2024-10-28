// material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Skeleton from '@mui/material/Skeleton';

import { gridSpacing } from '@/store/constant';


const TotalGrowthBarChart = () => (
    <Card>
        <CardContent>
            <Grid container spacing={gridSpacing}>
                <Grid xs={12}>
                    <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                        <Grid zeroMinWidth>
                            <Grid container spacing={1}>
                                <Grid xs={12}>
                                    <Skeleton variant="text"/>
                                </Grid>
                                <Grid xs={12}>
                                    <Skeleton variant="rectangular" height={20}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Skeleton variant="rectangular" height={50} width={80}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12}>
                    <Skeleton variant="rectangular" height={530}/>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default TotalGrowthBarChart;

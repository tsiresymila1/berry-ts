// material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Skeleton from '@mui/material/Skeleton';
import { gridSpacing } from "@/store/constant.ts";


const PopularCard = () => (
    <Card>
        <CardContent>
            <Grid container spacing={gridSpacing}>
                <Grid  size={12}>
                    <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                        <Grid>
                            <Skeleton variant="rectangular" height={20}/>
                        </Grid>
                        <Grid>
                            <Skeleton variant="rectangular" height={20} width={20}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={12}>
                    <Skeleton variant="rectangular" height={150}/>
                </Grid>
                <Grid size={12}>
                    <Grid container spacing={1}>
                        <Grid size={12}>
                            <Grid container alignItems="center" spacing={gridSpacing} justifyContent="space-between">
                                <Grid size={6}>
                                    <Skeleton variant="rectangular" height={20}/>
                                </Grid>
                                <Grid size={6}>
                                    <Grid container alignItems="center" spacing={gridSpacing}
                                          justifyContent="space-between">
                                        <Grid>
                                            <Skeleton variant="rectangular" height={20}/>
                                        </Grid>
                                        <Grid>
                                            <Skeleton variant="rectangular" height={16} width={16}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={6}>
                            <Skeleton variant="rectangular" height={20}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={12}>
                    <Grid container spacing={1}>
                        <Grid size={12}>
                            <Grid container alignItems="center" spacing={gridSpacing} justifyContent="space-between">
                                <Grid  size={6}>
                                    <Skeleton variant="rectangular" height={20}/>
                                </Grid>
                                <Grid size={6}>
                                    <Grid container alignItems="center" spacing={gridSpacing}
                                          justifyContent="space-between">
                                        <Grid>
                                            <Skeleton variant="rectangular" height={20}/>
                                        </Grid>
                                        <Grid>
                                            <Skeleton variant="rectangular" height={16} width={16}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={6}>
                            <Skeleton variant="rectangular" height={20}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={12}>
                    <Grid container spacing={1}>
                        <Grid size={12}>
                            <Grid container alignItems="center" spacing={gridSpacing} justifyContent="space-between">
                                <Grid size={6}>
                                    <Skeleton variant="rectangular" height={20}/>
                                </Grid>
                                <Grid size={6}>
                                    <Grid container alignItems="center" spacing={gridSpacing}
                                          justifyContent="space-between">
                                        <Grid>
                                            <Skeleton variant="rectangular" height={20}/>
                                        </Grid>
                                        <Grid>
                                            <Skeleton variant="rectangular" height={16} width={16}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={6}>
                            <Skeleton variant="rectangular" height={20}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={12}>
                    <Grid container spacing={1}>
                        <Grid size={12}>
                            <Grid container alignItems="center" spacing={gridSpacing} justifyContent="space-between">
                                <Grid size={6}>
                                    <Skeleton variant="rectangular" height={20}/>
                                </Grid>
                                <Grid size={6}>
                                    <Grid container alignItems="center" spacing={gridSpacing}
                                          justifyContent="space-between">
                                        <Grid>
                                            <Skeleton variant="rectangular" height={20}/>
                                        </Grid>
                                        <Grid>
                                            <Skeleton variant="rectangular" height={16} width={16}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={6}>
                            <Skeleton variant="rectangular" height={20}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={12}>
                    <Grid container spacing={1}>
                        <Grid size={12}>
                            <Grid container alignItems="center" spacing={gridSpacing} justifyContent="space-between">
                                <Grid size={6}>
                                    <Skeleton variant="rectangular" height={20}/>
                                </Grid>
                                <Grid size={6}>
                                    <Grid container alignItems="center" spacing={gridSpacing}
                                          justifyContent="space-between">
                                        <Grid>
                                            <Skeleton variant="rectangular" height={20}/>
                                        </Grid>
                                        <Grid>
                                            <Skeleton variant="rectangular" height={16} width={16}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={6}>
                            <Skeleton variant="rectangular" height={20}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
        <CardContent sx={{p: 1.25, display: 'flex', pt: 0, justifyContent: 'center'}}>
            <Skeleton variant="rectangular" height={25} width={75}/>
        </CardContent>
    </Card>
);

export default PopularCard;

import { Grid2 } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MainCard from "@/components/ui/cards/MainCard";
import TodoItemCheckbox from "@/views/widget/data/components/TodoItemCheckbox";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import { Add } from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

const DataWidgetPage = () => {
    return (
        <Grid2 container spacing={2}>
            <Grid size={12}>
                <Grid container spacing={2}>
                    <Grid size={{xs: 12, sm: 6, md: 6, lg: 4}}>
                        <MainCard contentSX={{px: 2}} title="To Do List">
                            <Grid container spacing={1}>
                                {Array.from(Array(6).keys()).map((_, i) => (
                                    <Grid key={i} size={12}>
                                        <TodoItemCheckbox label={`Label - ${i}`}/>
                                    </Grid>
                                ))}
                            </Grid>
                            <Divider/>
                            <CardActions sx={{justifyContent: "end", pb: 0}}>
                                <Fab size="small" color="primary" aria-label="add">
                                    <Add fontSize="small"/>
                                </Fab>
                            </CardActions>
                        </MainCard>
                    </Grid>
                    <Grid size={{xs: 12, sm: 6, md: 6, lg: 4}}>
                        <MainCard contentSX={{px: 2}} title="Traffic Sources">
                            <Grid container spacing={3}>
                                {Array.from(Array(6).keys()).map((_, i) => (
                                    <Grid key={i} size={12}>
                                        <Grid container spacing={1}>
                                            <Grid size={12}>
                                                <Grid container spacing={1}>
                                                    <Grid size="grow">
                                                        <Typography variant="body2">
                                                            Direct
                                                        </Typography>
                                                    </Grid>
                                                    <Grid>
                                                        <Typography variant="body2">
                                                            80%
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid size={12}>
                                                <LinearProgress variant="determinate" color="primary" value={58}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </MainCard>
                    </Grid>
                    <Grid size={{xs: 12, sm: 6, md: 12, lg: 4}}>
                        <MainCard contentSX={{px: 2}} title="Team Members">
                            <Grid container spacing={1}>
                                {Array.from(Array(6).keys()).map((_, i) => (
                                    <Grid key={i} size={12}>
                                        <TodoItemCheckbox label={`Label - ${i}`}/>
                                    </Grid>
                                ))}
                            </Grid>
                            <Divider/>
                            <CardActions sx={{justifyContent: "end", pb: 0}}>
                                <Fab size="small" color="primary" aria-label="add">
                                    <Add fontSize="small"/>
                                </Fab>
                            </CardActions>
                        </MainCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid2>
    );
};

export default DataWidgetPage;

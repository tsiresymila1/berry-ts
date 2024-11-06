import Grid from "@mui/material/Grid2";
import MainCard from "@/components/ui/cards/MainCard.tsx";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FilledInput, Grid2, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";

const SecurityTab = () => {
    return <Grid container spacing={3}>
        <Grid size={{xs: 12, sm: 8}}>
            <MainCard
                headerProps={{
                    titleTypographyProps: {
                        fontSize: '14px !important'
                    }
                }}
                title="Change Password"
                border
            >
                <Grid2 container spacing={1}>
                    <Grid2 size={12}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <InputLabel htmlFor="standard-adornment-current-password">Current password</InputLabel>
                            <FilledInput
                                type="password"
                                id="standard-adornment-current-password"
                                // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                            {/*<FormHelperText error >Helpers</FormHelperText>*/}
                        </FormControl>
                    </Grid2>
                    <Grid2 size={12} container spacing={1}>
                        <Grid2 size={{ sm: 6, xs: 12}}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <InputLabel htmlFor="standard-adornment-new-password">New Password</InputLabel>
                                <FilledInput
                                    type="password"
                                    id="standard-adornment-new-password"
                                    // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                                {/*<FormHelperText error >Helpers</FormHelperText>*/}
                            </FormControl>
                        </Grid2>
                        <Grid2 size={{ sm: 6, xs: 12}}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <InputLabel htmlFor="standard-adornment-c-new-password">Re-enter New Password</InputLabel>
                                <FilledInput
                                    type="password"
                                    id="standard-adornment-c-new-password"
                                    // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                                {/*<FormHelperText error >Helpers</FormHelperText>*/}
                            </FormControl>
                        </Grid2>
                    </Grid2>
                    <Grid2 size={12}>
                        <Button sx={{mx: 1, mt: 1}} variant="contained">Save Changes</Button>
                    </Grid2>
                </Grid2>
            </MainCard>
        </Grid>
        <Grid size={{xs: 12, sm: 4}}>
            <MainCard
                headerProps={{
                    titleTypographyProps: {
                        fontSize: '14px !important'
                    }
                }}
                title="Delete Account" border>
                <Stack p={2} justifyContent="center" alignItems="start" spacing={2}>
                    <Typography variant="body1">
                        To deactivate your account, first delete its resources. If you are the only owner of any teams, either assign another owner or deactivate the team.
                    </Typography>
                    <Button variant="outlined" color="error"> Delete Account</Button>
                </Stack>
            </MainCard>
        </Grid>

    </Grid>
};

export default SecurityTab;

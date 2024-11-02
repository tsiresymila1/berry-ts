import Grid from "@mui/material/Grid2";
import MainCard from "@/components/ui/cards/MainCard.tsx";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FilledInput, Grid2, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

const ProfileTab = () => {
    return <Grid container spacing={3}>
        <Grid size={{xs: 12, sm: 4}}>
            <MainCard
                headerProps={{
                    titleTypographyProps: {
                        fontSize: '14px !important'
                    }
                }}
                title="Profile Picture" border>
                <Stack p={2} justifyContent="center" alignItems="center" spacing={2}>
                    <Avatar
                        alt="Remy Sharp"
                        src="/src/assets/images/users/user-round.svg"
                        sx={{ width: 100, height: 100 }}
                    />
                    <Typography variant="subtitle2">
                        Upload/Change Your Profile Image
                    </Typography>
                    <Button variant="contained"> Upload avatar</Button>
                </Stack>
            </MainCard>
        </Grid>
        <Grid size={{xs: 12, sm: 8}}>
            <MainCard
                headerProps={{
                    titleTypographyProps: {
                        fontSize: '14px !important'
                    }
                }}
                title="Edit Account Details"
                border
            >
                <Grid2 container spacing={1}>
                    <Grid2 size={12}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
                            <FilledInput
                                type="text"
                                id="standard-adornment-name"
                                // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                            <FormHelperText >Helpers</FormHelperText>
                        </FormControl>
                    </Grid2>
                    <Grid2 size={12}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                            <InputLabel htmlFor="standard-adornment-eamil">Email address</InputLabel>
                            <FilledInput
                                type="text"
                                inputMode="email"
                                id="standard-adornment-email"
                                // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                            {/*<FormHelperText error >Helpers</FormHelperText>*/}
                        </FormControl>
                    </Grid2>
                    <Grid2 size={12} container spacing={1}>
                        <Grid2 size={{ sm: 6, xs: 12}}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <InputLabel htmlFor="standard-adornment-address">Address</InputLabel>
                                <FilledInput
                                    type="text"
                                    inputMode="text"
                                    id="standard-adornment-address"
                                    // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                                {/*<FormHelperText error >Helpers</FormHelperText>*/}
                            </FormControl>
                        </Grid2>
                        <Grid2 size={{ sm: 6, xs: 12}}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <InputLabel htmlFor="standard-adornment-country">Country</InputLabel>
                                <FilledInput
                                    type="text"
                                    id="standard-adornment-country"
                                    // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                                {/*<FormHelperText error >Helpers</FormHelperText>*/}
                            </FormControl>
                        </Grid2>
                    </Grid2>
                    <Grid2 size={12} container spacing={1}>
                        <Grid2 size={{ sm: 6, xs: 12}}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <InputLabel htmlFor="standard-adornment-phone-number">Phone number</InputLabel>
                                <FilledInput
                                    type="text"
                                    id="standard-adornment-phone-number"
                                    inputMode="tel"
                                    // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                />
                                {/*<FormHelperText error >Helpers</FormHelperText>*/}
                            </FormControl>
                        </Grid2>
                        <Grid2 size={{ sm: 6, xs: 12}}>
                            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                                <InputLabel htmlFor="standard-adornment-birthday">Birthday</InputLabel>
                                <FilledInput
                                    type="text"
                                    id="standard-adornment-birthday"
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
    </Grid>
}
export default ProfileTab;

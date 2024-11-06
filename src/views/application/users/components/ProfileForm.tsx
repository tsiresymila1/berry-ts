import { FilledInput, Grid2, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import { FC } from "react";

type ProfileFormProps = {
    footer?: boolean
}
const ProfileForm: FC<ProfileFormProps> = ({footer = true}) => {
    return <Grid2 container spacing={1}>
        <Grid2 size={12}>
            <FormControl fullWidth sx={{m: 1}} variant="filled">
                <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
                <FilledInput
                    type="text"
                    id="standard-adornment-name"
                    // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
                <FormHelperText>Helpers</FormHelperText>
            </FormControl>
        </Grid2>
        <Grid2 size={12}>
            <FormControl fullWidth sx={{m: 1}} variant="filled">
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
            <Grid2 size={{sm: 6, xs: 12}}>
                <FormControl fullWidth sx={{m: 1}} variant="filled">
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
            <Grid2 size={{sm: 6, xs: 12}}>
                <FormControl fullWidth sx={{m: 1}} variant="filled">
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
            <Grid2 size={{sm: 6, xs: 12}}>
                <FormControl fullWidth sx={{m: 1}} variant="filled">
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
            <Grid2 size={{sm: 6, xs: 12}}>
                <FormControl fullWidth sx={{m: 1}} variant="filled">
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
        {footer ? <Grid2 size={12}>
            <Button sx={{mx: 1, mt: 1}} variant="contained">Save Changes</Button>
        </Grid2> : null}
    </Grid2>
}

export default ProfileForm

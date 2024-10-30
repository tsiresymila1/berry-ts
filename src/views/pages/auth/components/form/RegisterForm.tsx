import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// third party
import * as Yup from 'yup';
import { Formik, FormikHelpers } from 'formik';

// project imports
import Google from '@/assets/images/icons/social-google.svg';
import AnimateButton from '@/components/ui/extended/AnimateButton';
import { strengthColor, strengthIndicator } from '@/utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useCustomizationStore } from "@/store/customization.ts";


type AuthRegisterProps = HTMLAttributes<HTMLFormElement>

type FormValues = {
    email: string;
    password: string;
    fname: string;
    lname: string;
    submit?: string | null;
};

const AuthRegister: FC<AuthRegisterProps> = ({...others}) => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const customization = useCustomizationStore();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(true);
    const [strength, setStrength] = useState<number>(0);
    const [level, setLevel] = useState<{color: string; label: string} | undefined>();

    const googleHandler = async () => {
        console.error('Register');
    };

    const handleClickShowPassword = (_: any) => {
        setShowPassword((prev) => !prev);
    };

    const handleMouseDownPassword = (_: any) => {
        _.preventDefault();
    };

    const changePassword = (value: string) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('123456');
    }, []);

    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid size={12}>
                    <AnimateButton>
                        <Button
                            variant="outlined"
                            fullWidth
                            onClick={googleHandler}
                            size="large"
                            sx={{
                                color: 'grey.700',
                                backgroundColor: theme.palette.grey[50],
                                borderColor: theme.palette.grey[100]
                            }}
                        >
                            <Box sx={{mr: {xs: 1, sm: 2, width: 20}}}>
                                <img src={Google} alt="google" width={16} height={16}
                                     style={{marginRight: matchDownSM ? 8 : 16}}/>
                            </Box>
                            Sign up with Google
                        </Button>
                    </AnimateButton>
                </Grid>
                <Grid size={12}>
                    <Box sx={{alignItems: 'center', display: 'flex'}}>
                        <Divider sx={{flexGrow: 1}} orientation="horizontal"/>
                        <Button
                            variant="outlined"
                            sx={{
                                cursor: 'unset',
                                m: 2,
                                py: 0.5,
                                px: 7,
                                // borderColor: `${theme.palette.grey[100]} !important`,
                                // color: `${theme.palette.grey[900]}!important`,
                                fontWeight: 500,
                                borderRadius: `${customization.borderRadius}px`
                            }}
                            disableRipple
                            disabled
                        >
                            OR
                        </Button>
                        <Divider sx={{flexGrow: 1}} orientation="horizontal"/>
                    </Box>
                </Grid>
                <Grid size={12} container alignItems="center" justifyContent="center">
                    <Box sx={{mb: 2}}>
                        <Typography variant="subtitle1">Sign up with Email address</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Formik<FormValues>
                initialValues={{
                    email: '',
                    password: '',
                    fname: '',
                    lname: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required'),
                    fname: Yup.string().required('First Name is required'),
                    lname: Yup.string().required('Last Name is required'),
                })}
                onSubmit={(
                    _values: FormValues,
                    {setSubmitting}: FormikHelpers<FormValues>
                ) => {
                    setSubmitting(false);
                }}
            >
                {({errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values}) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid size={{ xs: 12, sm: 6}}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    margin="normal"
                                    name="fname"
                                    type="text"
                                    value={values.fname}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    sx={{...theme.typography.customInput}}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6}} >
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    margin="normal"
                                    name="lname"
                                    type="text"
                                    value={values.lname}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    sx={{...theme.typography.customInput}}
                                />
                            </Grid>
                        </Grid>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)}
                                     sx={{...theme.typography.customInput}}>
                            <InputLabel htmlFor="outlined-adornment-email-register">Email Address /
                                Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-register"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl fullWidth error={Boolean(touched.password && errors.password)}
                                     sx={{...theme.typography.customInput}}>
                            <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-register"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    changePassword(e.target.value);
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-register">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {strength !== 0 && (
                            <FormControl fullWidth>
                                <Box sx={{mb: 2}}>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid>
                                            <Box style={{backgroundColor: level?.color}}
                                                 sx={{width: 85, height: 8, borderRadius: '7px'}}/>
                                        </Grid>
                                        <Grid>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </FormControl>
                        )}

                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid size={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={(event) => setChecked(event.target.checked)} name="checked"
                                            color="primary"/>
                                    }
                                    label={
                                        <Typography variant="subtitle1">
                                            Agree with &nbsp;
                                            <Typography variant="subtitle1" component={Link} to="#">
                                                Terms & Condition.
                                            </Typography>
                                        </Typography>
                                    }
                                />
                            </Grid>
                        </Grid>
                        {errors.submit && (
                            <Box sx={{mt: 3}}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}
                        <Box sx={{mt: 2}}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Sign Up
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthRegister;

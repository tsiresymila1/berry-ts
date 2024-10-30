import { Link } from 'react-router-dom';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import AuthWrapper1 from '@/views/pages/auth/components/wrapper/AuthWrapper';
import AuthCardWrapper from '@/views/pages/auth/components/wrapper/AuthCardWrapper';
import Logo from '@/components/ui/Logo';
import AuthFooter from '@/components/ui/cards/AuthFooter';
import LoginForm from "@/views/pages/auth/components/form/LoginForm";
import { useTheme } from "@mui/material/styles";

const LoginPage = () => {
    const theme = useTheme();
    const downMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <AuthWrapper1>
            <Grid container
                  direction="column"
                  justifyContent="flex-end" sx={{minHeight: '100vh'}}>
                <Grid size={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{minHeight: 'calc(100vh - 68px)'}}>
                        <Grid sx={{m: {xs: 1, sm: 3}, mb: 0}}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid sx={{mb: 3}}>
                                        <Link to="#" aria-label="logo">
                                            <Logo/>
                                        </Link>
                                    </Grid>
                                    <Grid size={12}>
                                        <Grid container direction={{xs: 'column-reverse', md: 'row'}}
                                              alignItems="center" justifyContent="center">
                                            <Grid>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography color="secondary.main" gutterBottom
                                                                variant={downMD ? 'h3' : 'h2'}>
                                                        Hi, Welcome Back
                                                    </Typography>
                                                    <Typography variant="caption" fontSize="16px"
                                                                textAlign={{xs: 'center', md: 'inherit'}}>
                                                        Enter your credentials to continue
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid size={12}>
                                        <LoginForm/>
                                    </Grid>
                                    <Grid size={12}>
                                        <Divider/>
                                    </Grid>
                                    <Grid size={12}>
                                        <Grid container direction="column" alignItems="center">
                                            <Typography component={Link} to="/register"
                                                        variant="subtitle1" sx={{textDecoration: 'none'}}>
                                                Don&apos;t have an account?
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={12} sx={{p: 3, pt: 1}}>
                    <AuthFooter/>
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default LoginPage;

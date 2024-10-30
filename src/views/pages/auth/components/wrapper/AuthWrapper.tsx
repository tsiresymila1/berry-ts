// material-ui
import { styled } from '@mui/material/styles';

const AuthWrapper1 = styled('div')(({theme}) => ({
    backgroundColor: (theme.palette.dark as any)['900'],
    minHeight: '100vh'
}));

export default AuthWrapper1;

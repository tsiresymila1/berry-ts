// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';

// project imports
import SubCard from '@/components/ui/cards/SubCard';
import MainCard from '@/components/ui/cards/MainCard';
import SecondaryAction from '@/components/ui/cards/CardSecondaryAction';
import { gridSpacing } from '@/store/constant';
import { FC } from "react";

type ShadowBoxProps = {
    shadow: string;
};

const ShadowBox: FC<ShadowBoxProps> = ({shadow}) => {
    return (
        <Card sx={{mb: 3, boxShadow: shadow}}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 4.5,
                    bgcolor: 'primary.light',
                    color: 'grey.800'
                }}
            >
                <Box sx={{color: 'inherit'}}>boxShadow: {shadow}</Box>
            </Box>
        </Card>
    );
};


type CustomShadowBoxProps = {
    shadow: string;
    label?: string;
    color: string;
};

const CustomShadowBox: FC<CustomShadowBoxProps> = ({shadow, label, color}) => (
    <Card sx={{mb: 3, boxShadow: shadow}}>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: 3,
                bgcolor: color,
                color: 'background.default'
            }}
        >
            {!label ? (
                <Box sx={{color: 'inherit'}}>boxShadow: {shadow}</Box>
            ) : (
                <Box sx={{color: 'inherit'}}>{label}</Box>
            )}
        </Box>
    </Card>
);


const UtilitiesShadow: FC = () => {
    const theme = useTheme();

    return (
        <MainCard title="Basic Shadow"
                  secondary={<SecondaryAction link="https://next.material-ui.com/system/shadows/"/>}>
            <Grid container spacing={gridSpacing}>
                <Grid xs={12}>
                    <SubCard title="Basic Shadow">
                        <Grid container spacing={gridSpacing}>
                            {Array.from({length: 25}, (_, i) => (
                                <Grid xs={12} sm={6} md={4} lg={3} key={i}>
                                    <ShadowBox shadow={String(i)}/>
                                </Grid>
                            ))}
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default UtilitiesShadow;

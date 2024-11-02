import { useCallback, useState } from 'react';

// Material-UI
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';


// Third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// Project imports
import SubCard from '@/components/ui/cards/SubCard';
import AnimateButton from '@/components/ui/extended/AnimateButton';
import { useCustomizationStore } from '@/store/customization.ts';
import { gridSpacing } from '@/store/constant';

// Assets
import { IconMoon, IconSettings, IconSun } from '@tabler/icons-react';
import Stack from "@mui/material/Stack";


const Customization = () => {
    const theme = useTheme();
    const {borderRadius, setBorderRadius, fontFamily, setFontFamily, scheme, setColorScheme} = useCustomizationStore(); // Adjust type according to your state structure

    // Drawer on/off
    const [open, setOpen] = useState<boolean>(false);
    const handleToggle = useCallback(() => {
        setOpen(prev => !prev);
    }, []);

    const handleBorderRadius = useCallback((_: Event, newValue: number | number[]) => {
        setBorderRadius(newValue as number);
    }, [setBorderRadius]);

    const toggleDarkMode = useCallback(() => {
        setColorScheme(scheme === 'dark' ? 'light' : 'dark');
    }, [scheme, setColorScheme])


    return (
        <>
            {/* Toggle button */}
            <Tooltip title="Live Customize">
                <Fab
                    component="div"
                    onClick={handleToggle}
                    size="medium"
                    variant="circular"
                    color="secondary"
                    sx={{
                        borderRadius: 0,
                        borderTopLeftRadius: '50%',
                        borderBottomLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        borderBottomRightRadius: '4px',
                        top: '25%',
                        position: 'fixed',
                        right: 10,
                        zIndex: theme.zIndex.speedDial,
                    }}
                >
                    <AnimateButton type="rotate">
                        <IconButton color="inherit" size="large" disableRipple>
                            <IconSettings/>
                        </IconButton>
                    </AnimateButton>
                </Fab>
            </Tooltip>

            <Drawer
                anchor="right"
                onClose={handleToggle}
                open={open}
                PaperProps={{
                    sx: {
                        width: 280,
                    },
                }}
            >
                <PerfectScrollbar component="div">
                    <Grid container width="100%" spacing={gridSpacing} sx={{p: 3}}>
                        <Grid size={12}>
                            <SubCard>
                                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                                    <Typography variant="body2">Theme</Typography>
                                    <IconButton
                                        onClick={toggleDarkMode}
                                        color="inherit"
                                        aria-label="Toggle dark/light mode">
                                        {scheme === "dark" ? <IconSun/> : <IconMoon color="black"/>}
                                    </IconButton>
                                </Stack>
                            </SubCard>
                        </Grid>
                        <Grid size={12}>
                            {/* Font family */}
                            <SubCard title="Font Family">
                                <FormControl>
                                    <RadioGroup
                                        aria-label="font-family"
                                        value={fontFamily}
                                        onChange={(e) => setFontFamily(e.target.value)}
                                        name="row-radio-buttons-group"
                                    >
                                        {['Roboto', 'Poppins', 'Inter'].map((font) => (
                                            <FormControlLabel
                                                key={font}
                                                value={font}
                                                control={<Radio/>}
                                                label={font}
                                                sx={{
                                                    '& .MuiSvgIcon-root': {fontSize: 28},
                                                    '& .MuiFormControlLabel-label': {color: theme.palette.text.primary},
                                                }}
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </SubCard>
                        </Grid>
                        <Grid size={12}>
                            {/* Border radius */}
                            <SubCard title="Border Radius">
                                <Grid container spacing={2} alignItems="center" sx={{mt: 2.5}}>
                                    <Grid>
                                        <Typography variant="h6" color="secondary">
                                            4px
                                        </Typography>
                                    </Grid>
                                    <Grid size="grow">
                                        <Slider
                                            size="small"
                                            value={borderRadius}
                                            onChange={handleBorderRadius}
                                            valueLabelDisplay="on"
                                            marks
                                            step={2}
                                            min={4}
                                            max={24}
                                            color="secondary"
                                            sx={{
                                                '& .MuiSlider-valueLabel': {
                                                    color: '#fff',
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid>
                                        <Typography variant="h6" color="secondary">
                                            24px
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </SubCard>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </Drawer>
        </>
    );
};

export default Customization;

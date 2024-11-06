import MainCard from "@/components/ui/cards/MainCard.tsx";
import React, { FC, useState } from "react";
import CustomTabPanel from "@/components/ui/CustomTabPanel.tsx";
import { styled, Tab, Tabs } from "@mui/material";
import SecurityTab from "@/views/application/users/components/SecurityTab.tsx";
import Grid from "@mui/material/Grid2";
import { IconAddressBook, IconInfoHexagon, IconLocationCheck, IconUserPlus } from "@tabler/icons-react";
import Typography from "@mui/material/Typography";
import ProfileForm from "@/views/application/users/components/ProfileForm.tsx";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";


const CustomTab = styled(Tab)(({theme}) => ({
    paddingVertical: theme.spacing(1.5),
    paddingHorizontal: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    maxWidth: "100% !important",
    justifyContent: 'flex-start',
    transition: theme.transitions.create(['background-color', 'color'], {
        duration: theme.transitions.duration.short,
    }),
    '&.Mui-selected': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.text.secondary,
    },
    '& .MuiTab-iconWrapper': {
        marginRight: theme.spacing(2), // Adjust icon spacing
    },
}));

const CustomTabs = styled(Tabs)(({theme}) => ({
    borderRight: '1px solid',
    borderRightColor: theme.palette.divider,
    padding: theme.spacing(2),
    '& .MuiTabs-indicator': {
        display: 'none',
    }
}))

type TabLabelProps = {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
}
const TabLabel: FC<TabLabelProps> = ({title, subtitle}) => {
    return <Grid container justifyContent="start">
        {title ? <Grid display="flex" justifyContent="start" size={12}>
            <Typography align="left" width="100%" variant="subtitle1">{title}</Typography>
        </Grid> : null}
        {subtitle ? <Grid display="flex" justifyContent="start" size={12}>
            <Typography align="left" variant="caption">{subtitle}</Typography>
        </Grid> : null}
    </Grid>
}

const ProfilePage2 = () => {
    const [value, setValue] = useState(0);

    const handleChange = (_: React.SyntheticEvent, _newValue: number) => {
        // setValue(newValue);
    };

    const back = () => {
        setValue(v => Math.max(0, v - 1))
    }
    const next = () => {
        setValue(v => Math.min(3, v + 1))
    }
    const a11yProps = (index: number) => {
        return {
            id: `custom-tab-panel-${index}`,
            'aria-controls': `custom-tab-panel-${index}`,
            sx: {fontSize: 14}
        };
    }

    return <MainCard title="Account">
        <Grid container spacing={3} mb={2}>
            <Grid size={{xs: 12, sm: 12, md: 3}}>
                <CustomTabs orientation="vertical" value={value} onChange={handleChange}
                            aria-label="basic tabs example">
                    <CustomTab label={
                        <TabLabel title="Personal Information" subtitle="Profile Settings"/>
                    } {...a11yProps(0)} iconPosition="start" icon={<IconUserPlus/>}/>
                    <CustomTab label={
                        <TabLabel title="Contact Information" subtitle="Contact detail"/>
                    } {...a11yProps(1)} iconPosition="start" icon={<IconAddressBook/>}/>
                    <CustomTab label={
                        <TabLabel title="Address Information" subtitle="Address detail"/>
                    } {...a11yProps(2)} iconPosition="start" icon={<IconLocationCheck/>}/>
                    <CustomTab label={
                        <TabLabel title="Other detail" subtitle="Update profile security"/>
                    } {...a11yProps(3)} iconPosition="start" icon={<IconInfoHexagon/>}/>
                </CustomTabs>
            </Grid>
            <Grid size={{xs: 12, sm: 12, md: 9}}>
                <CustomTabPanel value={value} index={0}>
                    <ProfileForm footer={false}/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Billing
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <SecurityTab/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    Notification
                </CustomTabPanel>
            </Grid>
        </Grid>
        <Divider/>
        <CardActions sx={{justifyContent: 'space-between', py: 1}}>
            {value === 0 ? <span></span> : <Button sx={{mx: 1, mt: 1}} onClick={back} variant="outlined">Back</Button>}
            <Button sx={{mx: 1, mt: 1}} onClick={next} variant="contained">Save</Button>
        </CardActions>
    </MainCard>
}

export default ProfilePage2;

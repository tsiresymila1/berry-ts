import MainCard from "@/components/ui/cards/MainCard.tsx";
import { useState } from "react";
import CustomTabPanel from "@/components/ui/CustomTabPanel.tsx";
import { Tab, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import ProfileTab from "@/views/pages/application/users/components/ProfileTab.tsx";
import SecurityTab from "@/views/pages/application/users/components/SecurityTab.tsx";

const ProfilePage = () => {
    const [value, setValue] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const a11yProps = (index: number) => {
        return {
            id: `custom-tab-panel-${index}`,
            'aria-controls': `custom-tab-panel-${index}`,
            sx: {fontSize: 14}
        };
    }

    return <MainCard title="Account">
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="Billing" {...a11yProps(1)} />
                    <Tab label="Security" {...a11yProps(2)} />
                    <Tab label="Notification" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <ProfileTab />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Billing
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <SecurityTab />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                Notification
            </CustomTabPanel>
        </Box>
    </MainCard>
}

export default ProfilePage;

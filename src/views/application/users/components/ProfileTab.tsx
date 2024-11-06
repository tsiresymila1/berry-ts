import Grid from "@mui/material/Grid2";
import MainCard from "@/components/ui/cards/MainCard.tsx";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProfileForm from "@/views/application/users/components/ProfileForm.tsx";

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
                <ProfileForm />
            </MainCard>
        </Grid>
    </Grid>
}
export default ProfileTab;

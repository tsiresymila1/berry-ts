import MainCard from "@/components/ui/cards/MainCard.tsx";
import Grid from "@mui/material/Grid2";
import SubCard from "@/components/ui/cards/SubCard.tsx";
import User1 from "@/assets/images/users/user-round.svg";
import Avatar from "@mui/material/Avatar";
import { MouseEvent, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { ChatBubbleTwoTone, MoreHoriz } from "@mui/icons-material";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { IconCircleCheck, IconTrash } from "@tabler/icons-react";
import Button from "@mui/material/Button";
import SearchInput from "@/views/application/users/components/SearchInput.tsx";

const MoreMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <div>
        <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <MoreHoriz fontSize="small"/>
        </IconButton>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </div>
}

const CardUserPage = () => {
    return <MainCard title="Cards" secondary={
        <SearchInput/>
    }>
        <Grid container spacing={2}>
            {Array.from(Array(12).keys()).map((_, i) => (
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <SubCard key={i} content={false}>
                        <CardHeader
                            sx={{p: 2.5}} title={
                            <Grid container spacing={2}>
                                <Grid>
                                    <Avatar sx={{width: 56, height: 56}} src={User1}></Avatar>
                                </Grid>
                                <Grid size={12}>
                                    <Stack direction="row" alignItems="center">
                                        <Typography variant="h3">Elnora</Typography>
                                        <IconCircleCheck color="green"/>
                                    </Stack>
                                    <Typography variant="subtitle2">Lead Marketing Facilitator</Typography>
                                </Grid>
                            </Grid>
                        }
                            action={<MoreMenu/>}/>
                        <CardContent sx={{px: 2.5}}>
                            <Grid container spacing={2}>
                                <Grid size={12}>
                                    <Typography variant="caption">Email</Typography>
                                    <Typography variant="h6" fontWeight="bold">Reid_OConnell4@yahoo.com</Typography>
                                </Grid>
                            </Grid>
                            <Grid container mt={3} spacing={2}>
                                <Grid size="grow">
                                    <Typography variant="caption">Phone</Typography>
                                    <Typography variant="h6" fontWeight="bold">506-654-1653 </Typography>
                                </Grid>
                                <Grid size="grow">
                                    <Typography variant="caption">Location</Typography>
                                    <Typography variant="h6" fontWeight="bold">Port Narcos</Typography>
                                </Grid>
                            </Grid>
                            <Grid container mt={3} spacing={2}>
                                <Grid size={6}>
                                    <Button sx={{width: "100%"}} variant="outlined" color="primary"
                                            startIcon={<ChatBubbleTwoTone/>} size="medium">
                                        Message
                                    </Button>
                                </Grid>
                                <Grid size={6}>
                                    <Button sx={{width: "100%"}} variant="outlined" color="error"
                                            startIcon={<IconTrash/>} size="medium">
                                        Block
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </SubCard>
                </Grid>
            ))}
        </Grid>
    </MainCard>
}

export default CardUserPage;

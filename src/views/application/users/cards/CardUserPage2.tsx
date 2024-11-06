import MainCard from "@/components/ui/cards/MainCard.tsx";
import Grid from "@mui/material/Grid2";
import SubCard from "@/components/ui/cards/SubCard.tsx";
import User1 from "@/assets/images/users/user-round.svg";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CardMedia, styled } from "@mui/material";
import BackImage from '@/assets/images/back.png'
import Chip from "@/components/ui/extended/Chip.tsx";
import { ChatBubbleTwoTone, Facebook, LinkedIn, X } from "@mui/icons-material";
import { alpha, darken } from "@mui/material/styles";
import SearchInput from "@/views/application/users/components/SearchInput.tsx";

const CustomButton = styled(Button, {})<{colorVal?: string, alphaVal?: number}>(({theme, colorVal, alphaVal}) => {
    const buttonColor = colorVal || theme.palette.secondary.dark;
    return ({
        backgroundColor: alpha(darken(buttonColor, 0.1), alphaVal ?? 0.3),
        color: buttonColor,
        padding: theme.spacing(1),
        '&:hover': {
            backgroundColor: buttonColor,
            color: theme.palette.secondary.light,
        }
    })
})

const CardUserPage = () => {

    return <MainCard title="Cards" secondary={
        <SearchInput/>
    }>
        <Grid container spacing={2}>
            {Array.from(Array(12).keys()).map((_, i) => (
                <Grid size={{xs: 12, sm: 6, md: 4}}>
                    <SubCard key={i} content={false}>
                        <CardMedia
                            component="img"
                            height="175"
                            image={BackImage}
                            alt="Paella dish"/>
                        <CardContent sx={{px: 2.5}}>
                            <Grid container spacing={3}>
                                <Grid size={12}>
                                    <Grid container spacing={2}>
                                        <Grid size={12}>
                                            <Avatar sx={{width: 72, height: 72, margin: '-50px auto 0px'}}
                                                    src={User1}></Avatar>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container width="100%" spacing={1}>
                                    <Grid size={12} justifyContent="center">
                                        <Typography align="center" fontWeight="bold" variant="h4">Jennyfer</Typography>
                                    </Grid>
                                    <Grid size={12} justifyContent="center">
                                        <Typography align="center" variant="body2">Reid_OConnell4@yahoo.com</Typography>
                                    </Grid>
                                    <Grid size={12} display="flex" justifyContent="center">
                                        <Chip variant="filled" chipcolor="success" label="Active"/>
                                    </Grid>
                                </Grid>
                                <Grid container width="100%" spacing={2}>
                                    <Grid size={4}>
                                        <CustomButton
                                            colorVal="rgb(66, 103, 178)"
                                            fullWidth
                                        >
                                            <Facebook fontSize="small"/>
                                        </CustomButton>
                                    </Grid>
                                    <Grid size={4}>
                                        <CustomButton
                                            fullWidth
                                            colorVal="rgb(14, 118, 168)"
                                        >
                                            <LinkedIn fontSize="small"/>
                                        </CustomButton>
                                    </Grid>
                                    <Grid size={4}>
                                        <CustomButton
                                            colorVal="rgb(0, 0, 0)"
                                            alphaVal={0.1}
                                            fullWidth
                                        >
                                            <X fontSize="small"/>
                                        </CustomButton>
                                    </Grid>
                                </Grid>
                                <Grid container width="100%" spacing={2}>
                                    <Grid size={12}>
                                        <Button fullWidth variant="outlined" color="primary"
                                                startIcon={<ChatBubbleTwoTone/>} size="medium">
                                            Message
                                        </Button>
                                    </Grid>
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

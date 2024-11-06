import MainCard from "@/components/ui/cards/MainCard.tsx";
import { styled, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IconCircleCheck, IconMessage, IconTrash } from "@tabler/icons-react";

import User1 from '@/assets/images/users/user-round.svg';
import { AvatarGroup, Pagination, PaginationItem } from "@mui/lab";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import SearchInput from "@/views/application/users/components/SearchInput.tsx";


const StyledTableCell = styled(TableCell)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'block',
        width: '100%',
        border: "none"
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'block',
        marginBottom: theme.spacing(2),
    },
}));

const ListUserPage2 = () => {
    return <MainCard title="List" secondary={
        <SearchInput/>
    }>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell>
                            <Grid container spacing={2}>
                                <Grid size={{xs: 12, sm: "auto"}}>
                                    <Avatar sx={{width: 56, height: 56}} src={User1}></Avatar>
                                </Grid>
                                <Grid size={{xs: 12, sm: "grow"}}>
                                    <Grid container spacing={2}>
                                        <Grid size={12}>
                                            <Stack direction="row" alignItems="center">
                                                <Typography variant="subtitle1">Elnora</Typography>
                                                <IconCircleCheck color="green"/>
                                            </Stack>
                                            <Typography variant="subtitle2">Lead Marketing Facilitator</Typography>
                                        </Grid>
                                        <Grid size={12}>
                                            <Typography variant="body2">
                                                We need to generate the virtual CSS hard drive!
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </StyledTableCell>
                        <StyledTableCell>
                            <Grid container spacing={2}>
                                <Grid size={12}>
                                    <Typography variant="caption">Email</Typography>
                                    <Typography variant="h6" fontWeight="bold">Reid_OConnell4@yahoo.com</Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Typography variant="caption">Phone</Typography>
                                    <Typography variant="h6" fontWeight="bold">506-654-1653 </Typography>
                                </Grid>
                            </Grid>
                        </StyledTableCell>
                        <StyledTableCell>
                            <Grid container spacing={2}>
                                <Grid size={12}>
                                    <Typography variant="caption">Location</Typography>
                                    <Typography variant="h6" fontWeight="bold">Saucerize</Typography>
                                </Grid>
                                <Grid size={12}>
                                    <Grid container>
                                        <AvatarGroup
                                            variant="circular"
                                            slotProps={{surplus: {sx: {width: 32, height: 32, fontSize: 14}}}}
                                            spacing="small" max={4}
                                        >
                                            <Avatar sx={{width: 32, height: 32}} alt="Remy Sharp" src={User1}/>
                                            <Avatar sx={{width: 32, height: 32}} alt="Travis Howard" src={User1}/>
                                            <Avatar sx={{width: 32, height: 32}} alt="Cindy Baker" src={User1}/>
                                            <Avatar sx={{width: 32, height: 32}} alt="Agnes Walker" src={User1}/>
                                            <Avatar sx={{width: 32, height: 32}} alt="Trevor Henderson" src={User1}/>
                                        </AvatarGroup>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </StyledTableCell>
                        <StyledTableCell>
                            <Grid container spacing={2}>
                                <Grid size={12}>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid>
                                            <Typography variant="subtitle2">Progress</Typography>
                                        </Grid>
                                        <Grid size="grow">
                                            <LinearProgress variant="determinate" sx={{width: "100%"}} value={78}/>
                                        </Grid>
                                        <Grid>
                                            <Typography variant="subtitle2">78%</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid size={12}>
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid size={6}>
                                            <Button sx={{width: "100%"}} variant="outlined" color="primary"
                                                    startIcon={<IconMessage/>} size="small">
                                                Message
                                            </Button>
                                        </Grid>
                                        <Grid size={6}>
                                            <Button sx={{width: "100%"}} variant="outlined" color="error"
                                                    startIcon={<IconTrash/>} size="small">
                                                Block
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
            <Stack justifyContent="center" alignItems="center" my={2}>
                <Pagination
                    page={1}
                    count={10}
                    variant="outlined"
                    color="secondary"
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            to={`/${item.page === 1 ? '' : `?page=${item.page}`}`}
                            {...item}
                        />
                    )}
                />
            </Stack>
        </TableContainer>
    </MainCard>;
}

export default ListUserPage2;

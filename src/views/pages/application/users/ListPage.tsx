import MainCard from "@/components/ui/cards/MainCard.tsx";

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IconCircleCheck, IconPencil, IconTrash } from "@tabler/icons-react";
import Chip from "@/components/ui/extended/Chip.tsx";
import IconButton from "@mui/material/IconButton";

import User1 from '@/assets/images/users/user-round.svg';
import { Pagination, PaginationItem } from "@mui/lab";
import { Link } from "react-router-dom";
import { useCustomizationStore } from "@/store/customization.ts";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    width: '100%',
    borderRadius: `${useCustomizationStore().borderRadius}px`,
    backgroundColor: alpha(theme.palette.primary.dark, 0.1),
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '24ch',
            },
        },
    },
}));

const ListPage = () => {
    return <MainCard title="List" secondary={<Search>
        <SearchIconWrapper>
            <SearchIcon color="primary" fontSize="small"/>
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search"/>
    </Search>}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ fontSize: 12}}>
                        <TableCell>#</TableCell>
                        <TableCell>User profile</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Friends</TableCell>
                        <TableCell>Followers</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>01</TableCell>
                        <TableCell>
                            <Stack gap={2} direction="row" alignItems="center">
                                <Avatar src={User1}></Avatar>
                                <Stack>
                                    <Stack direction="row" gap={1}>
                                        <Typography variant="subtitle1">Curtis</Typography>
                                        <IconCircleCheck color="green" fontSize="medium" />
                                    </Stack>
                                    <Typography fontWeight="normal" variant="h6" component="div">wiegand@hotmail.com</Typography>
                                </Stack>
                            </Stack>
                        </TableCell>
                        <TableCell>Madagascar</TableCell>
                        <TableCell>834</TableCell>
                        <TableCell>3645</TableCell>
                        <TableCell>
                            <Chip chipcolor="success" variant="filled" label="Active" />
                        </TableCell>
                        <TableCell>
                            <Stack direction="row" justifyContent="center" alignItems="center">
                                <IconButton color="primary">
                                    <IconPencil />
                                </IconButton>
                                <IconButton color="error">
                                    <IconTrash fontSize="medium" />
                                </IconButton>
                            </Stack>
                        </TableCell>
                    </TableRow>
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

export default ListPage;

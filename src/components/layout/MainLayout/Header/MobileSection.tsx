import { FC, useCallback, useEffect, useRef, useState } from 'react';

// Material-UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Toolbar from '@mui/material/Toolbar';

// Project import
import SearchSection from './SearchSection.tsx';
import ProfileSection from './ProfilSection';
import Transitions from '@/components/ui/extended/Transitions.tsx';

import { MoreOutlined } from '@ant-design/icons';


const MobileSection: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const prevOpen = useRef(open);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = useCallback((event: MouseEvent | TouchEvent) => {
        if (anchorRef.current && anchorRef.current?.contains(event.target as Node)) {
            return;
        }
        setOpen(false);
    }, []);


    useEffect(() => {
        if (prevOpen.current && !open) {
            anchorRef.current?.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <>
            <Box sx={{flexShrink: 0, ml: 0.75}}>
                <IconButton
                    component="span"
                    disableRipple
                    sx={{
                        bgcolor: open ? 'grey.300' : 'grey.100'
                    }}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    color="inherit"
                >
                    <MoreOutlined/>
                </IconButton>
            </Box>
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                style={{
                    width: '100%'
                }}
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 9]
                            }
                        }
                    ]
                }}
            >
                {({TransitionProps}) => (
                    <Transitions type="fade" in={open} {...TransitionProps}>
                        <Paper /*sx={{ boxShadow: theme.customShadows.z1 }}*/>
                            <ClickAwayListener onClickAway={handleClose}>
                                <AppBar color="inherit">
                                    <Toolbar>
                                        <SearchSection/>
                                        <ProfileSection/>
                                    </Toolbar>
                                </AppBar>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
        </>
    );
};

export default MobileSection;

// material-ui
import { Typography } from '@mui/material';


import NavGroup from './NavGroup';
import menuItem from '@/menu-items';
import { useMemo } from "react";


const MenuList = () => {
    const navItems = useMemo(() => menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item}/>;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    }), []);

    return <>{navItems}</>;
};

export default MenuList;

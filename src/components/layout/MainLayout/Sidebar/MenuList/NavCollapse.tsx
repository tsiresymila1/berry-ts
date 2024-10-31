import { FC, Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import NavItem, { MenuItem } from './NavItem';
import { useCustomizationStore } from "@/store/customization.ts";

// Type definitions for props
interface NavCollapseProps {
    menu: MenuItem;
    level: number;
}

const NavCollapse: FC<NavCollapseProps> = ({menu, level}) => {
    const theme = useTheme();
    const customization = useCustomizationStore();
    const {pathname} = useLocation();

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);

    const handleClick = useCallback(() => {
        setOpen(prev => !prev);
        setSelected(prev => (!prev ? menu.id : null));
    }, [menu.id]);

    const checkOpenForParent = (child: MenuItem[], id: string) => {
        for (const item of child) {
            if (item.url === pathname) {
                setOpen(true);
                setSelected(id);
                break; // Exit loop if match is found
            }
            if (item.children) {
                checkOpenForParent(item.children, id);
            }
        }
    }

    useEffect(() => {
        if (menu.children) {
            menu.children.forEach((item) => {
                if (item.children?.length) {
                    checkOpenForParent(item.children, menu.id);
                }
                if (item.url === pathname) {
                    setSelected(menu.id);
                    setOpen(true);
                }
            });
        }
    }, [pathname, menu.children, checkOpenForParent, menu.id]);

    const menus = useMemo(() =>
        menu.children?.map((item) => {
            switch (item.type) {
                case 'collapse':
                    return <NavCollapse key={item.id} menu={item} level={level + 1}/>;
                case 'item':
                    return <NavItem key={item.id} item={item} level={level + 1}/>;
                default:
                    return (
                        <Typography key={item.id} variant="h6" color="error" align="center">
                            Menu Items Error
                        </Typography>
                    );
            }
        }), [level, menu.children]);

    const menuIcon = useMemo(() => {
        const Icon = menu.icon;
        return Icon ? (
            <Icon strokeWidth={1.5} size="1.3rem" style={{marginTop: 'auto', marginBottom: 'auto'}}/>
        ) : (
            <FiberManualRecordIcon
                sx={{
                    width: selected === menu.id ? 8 : 6,
                    height: selected === menu.id ? 8 : 6
                }}
                fontSize={level > 0 ? 'inherit' : 'medium'}
            />
        );
    }, [menu.icon, selected, menu.id, level]);

    return (
        <>
            <ListItemButton
                sx={{
                    borderRadius: `${customization.borderRadius}px`,
                    mb: 0.5,
                    alignItems: 'flex-start',
                    backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                    py: level > 1 ? 1 : 1.25,
                    pl: `${level * 24}px`
                }}
                selected={selected === menu.id}
                onClick={handleClick}
            >
                <ListItemIcon sx={{my: 'auto', minWidth: !menu.icon ? 18 : 36}}>{menuIcon}</ListItemIcon>
                <ListItemText
                    primary={
                        <Typography variant={selected === menu.id ? 'h5' : 'body1'} color="inherit" sx={{my: 'auto'}}>
                            {menu.title}
                        </Typography>
                    }
                    secondary={
                        menu.caption && (
                            <Typography variant="caption" sx={{...theme.typography.subMenuCaption}} display="block"
                                        gutterBottom>
                                {menu.caption}
                            </Typography>
                        )
                    }
                />
                {open ? (
                    <IconChevronUp stroke={1.5} size="1rem" style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                ) : (
                    <IconChevronDown stroke={1.5} size="1rem" style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                )}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                    component="div"
                    disablePadding
                    sx={{
                        position: 'relative',
                        '&:after': {
                            content: "''",
                            position: 'absolute',
                            left: '32px',
                            top: 0,
                            height: '100%',
                            width: '1px',
                            opacity: 1,
                            background: theme.palette.primary.light
                        }
                    }}
                >
                    {menus?.map((menu) => (
                        <Fragment key={menu.key}>
                            {menu}
                        </Fragment>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default NavCollapse;

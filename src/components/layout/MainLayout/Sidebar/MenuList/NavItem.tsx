import {
    ElementType,
    FC,
    forwardRef,
    JSXElementConstructor,
    ReactElement,
    useCallback,
    useEffect,
    useMemo
} from 'react';
import { Link, useLocation } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { ChipProps } from '@mui/material/Chip';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useCustomizationStore } from "@/store/customization.ts";
import Chip from "@/components/ui/extended/Chip.tsx";
import { To } from "react-router";

// Define types for item and chip
interface ChipType {
    color: ChipProps["color"];
    variant: ChipProps["variant"];
    size: ChipProps["size"];
    label: ChipProps["label"];
    avatar?: ReactElement<unknown, string | JSXElementConstructor<any>> | undefined;
}

export interface MenuItem {
    id: string;
    title?: string;
    caption?: string;
    url?: To;
    icon?: ElementType;
    children?: MenuItem[];
    type: 'collapse' | 'item' | 'group';
    target?: string | boolean;
    chip?: ChipType,
    external?: boolean;
    disabled?: boolean;
    breadcrumbs?: boolean
}

interface NavItemProps {
    item: MenuItem;
    level: number;
}

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem: FC<NavItemProps> = ({item, level}) => {
    const theme = useTheme();
    const {isOpen, borderRadius, setOpened, setMenuOpen} = useCustomizationStore();
    const {pathname} = useLocation();
    const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

    const Icon = item.icon;
    const itemIcon = useMemo(() => {
        return Icon ? (
            <Icon stroke={1.5} size="1.3rem"/>
        ) : (
            <FiberManualRecordIcon
                sx={{
                    width: isOpen.findIndex((id: string) => id === item.id) > -1 ? 8 : 6,
                    height: isOpen.findIndex((id: string) => id === item.id) > -1 ? 8 : 6,
                }}
                fontSize={level > 0 ? 'inherit' : 'medium'}
            />
        )
    }, [Icon, isOpen, item.id, level]);

    let itemTarget = useMemo(() => item.target ? '_blank' : '_self', [item.target]);


    const listItemProps = useMemo(() => {
        return item.external ? {component: 'a', href: item.url, target: itemTarget} : {
            component: forwardRef<HTMLAnchorElement>((props, ref) => (
                <Link ref={ref} {...props} to={item.url!} target={itemTarget}/>
            )),
        };
    }, [item.external, item.url, itemTarget])

    const itemHandler = useCallback((id: string) => {
        setMenuOpen(id)
        if (matchesSM) setOpened(false);
    }, [setMenuOpen, matchesSM, setOpened]);

    // active menu item on page load
    useEffect(() => {
        const currentIndex = document.location.pathname
            .toString()
            .split('/')
            .findIndex((id) => id === item.id);
        if (currentIndex > -1) {
            setMenuOpen(item.id)
        }
    }, [pathname, item.id]);

    return (
        <ListItemButton
            {...listItemProps}
            disabled={item.disabled}
            sx={{
                borderRadius: `${borderRadius}px`,
                mb: 0.5,
                alignItems: 'flex-start',
                backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                py: level > 1 ? 1 : 1.25,
                pl: `${level * 24}px`,
            }}
            selected={isOpen.findIndex((id: string) => id === item.id) > -1}
            onClick={() => itemHandler(item.id)}
        >
            <ListItemIcon sx={{my: 'auto', minWidth: item.icon ? 36 : 18}}>{itemIcon}</ListItemIcon>
            <ListItemText
                primary={
                    <Typography
                        variant={isOpen.findIndex((id: string) => id === item.id) > -1 ? 'h5' : 'body1'}
                        color="inherit"
                    >
                        {item.title}
                    </Typography>
                }
                secondary={
                    item.caption && (
                        <Typography
                            variant="caption"
                            sx={{...theme.typography.subMenuCaption}}
                            display="block"
                            gutterBottom
                        >
                            {item.caption}
                        </Typography>
                    )
                }
            />
            {item.chip && (
                <Chip
                    chipcolor={item.chip.color}
                    variant={item.chip.variant}
                    size={item.chip.size}
                    label={item.chip.label}
                    avatar={item.chip.avatar ? <Avatar>{item.chip?.avatar}</Avatar> : undefined}
                />
            )}
        </ListItemButton>
    );
};

export default NavItem;

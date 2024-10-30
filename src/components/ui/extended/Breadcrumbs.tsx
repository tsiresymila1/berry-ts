import { ElementType, ReactNode, useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Material-UI
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

import navigation from '@/menu-items';

// Assets
import { IconChevronRight, IconTallymark1 } from '@tabler/icons-react';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import HomeIcon from '@mui/icons-material/Home';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

interface BTitleProps {
    title: string | ReactNode;
}

const BTitle = ({title}: BTitleProps) => (
    <Grid>
        <Typography variant="h3" sx={{fontWeight: 500}}>
            {title}
        </Typography>
    </Grid>
);

interface BreadcrumbsProps {
    card?: boolean;
    custom?: boolean;
    divider?: boolean;
    heading?: string;
    icon?: boolean;
    icons?: boolean;
    links?: Array<{title: string; to?: string; icon?: ElementType}>;
    maxItems?: number;
    rightAlign?: boolean;
    separator?: ElementType | ReactNode;
    title?: boolean;
    titleBottom?: boolean;
    sx?: object;
}

const Breadcrumbs = ({
                         card,
                         custom = false,
                         divider = false,
                         heading,
                         icon = true,
                         icons,
                         links,
                         maxItems,
                         rightAlign = true,
                         separator = IconChevronRight,
                         title = true,
                         titleBottom,
                         sx,
                         ...others
                     }: BreadcrumbsProps) => {
    const theme = useTheme();
    const location = useLocation();
    const [main, setMain] = useState<any>();
    const [item, setItem] = useState<any>();

    const iconSX = {
        marginRight: 6,
        marginTop: -2,
        width: '1rem',
        height: '1rem',
        color: theme.palette.secondary.main,
    };

    const linkSX = {
        display: 'flex',
        color: 'grey.900',
        textDecoration: 'none',
        alignContent: 'center',
        alignItems: 'center',
    };

    const customLocation = location.pathname;

    useEffect(() => {
        navigation?.items?.forEach((menu: any) => {
            if (menu.type === 'group') {
                if (menu.url === customLocation) {
                    setMain(menu);
                    setItem(menu);
                } else {
                    getCollapse(menu);
                }
            }
        });
    }, [customLocation]);

    const getCollapse = (menu: any) => {
        if (!custom && menu.children) {
            menu.children.forEach((collapse: any) => {
                if (collapse.type === 'collapse') {
                    getCollapse(collapse);
                    if (collapse.url === customLocation) {
                        setMain(collapse);
                        setItem(collapse);
                    }
                } else if (collapse.type === 'item' && collapse.url === customLocation) {
                    setMain(menu);
                    setItem(collapse);
                }
            });
        }
    };

    const SeparatorIcon = separator as ElementType;
    const separatorIcon = separator ? <SeparatorIcon stroke={1.5} size="16px"/> :
        <IconTallymark1 stroke={1.5} size="16px"/>;

    const mainContent = useMemo(() => {
        let content;
        let CollapseIcon: ElementType | undefined;

        if (main && main.type === 'collapse') {
            CollapseIcon = main.icon || AccountTreeTwoToneIcon;
            content = (
                <Typography
                    {...(main.url ? {component: Link, to: main.url} : {})}
                    variant="subtitle1"
                    sx={linkSX}
                    color={window.location.pathname === main.url ? 'text.primary' : 'text.secondary'}
                >
                    {icons && CollapseIcon && <CollapseIcon style={iconSX}/>}
                    {main.title}
                </Typography>
            );
        }
        return content;
    }, [main, icons, iconSX, linkSX]);

    const itemContent = useMemo(() => {
        if (!item) return null;
        const ItemIcon = item.icon || AccountTreeTwoToneIcon;
        return (
            <Typography variant="subtitle1" sx={{...linkSX, color: 'text.secondary'}}>
                {icons && <ItemIcon style={iconSX}/>}
                {item.title}
            </Typography>
        );
    }, [item, icons, iconSX, linkSX]);

    const tempContent = useMemo(() => {
        if (custom && links && links.length > 0) {
            return (
                <MuiBreadcrumbs
                    aria-label="breadcrumb"
                    maxItems={maxItems || 8}
                    separator={separatorIcon}
                    sx={{'& .MuiBreadcrumbs-separator': {width: 16, ml: 1.25, mr: 1.25}}}
                >
                    {links.map((link, index) => {
                        const CollapseIcon = link.icon || AccountTreeTwoToneIcon;
                        return (
                            <Typography
                                key={index}
                                {...(link.to ? {component: Link, to: link.to} : {})}
                                variant="subtitle1"
                                sx={linkSX}
                                color={!link.to ? 'text.primary' : 'text.secondary'}
                            >
                                {link.icon && <CollapseIcon style={iconSX}/>}
                                {link.title}
                            </Typography>
                        );
                    })}
                </MuiBreadcrumbs>
            );
        }

        return (
            <MuiBreadcrumbs
                aria-label="breadcrumb"
                maxItems={maxItems || 8}
                separator={separatorIcon}
                sx={{'& .MuiBreadcrumbs-separator': {width: 16, ml: 1.25, mr: 1.25}}}
            >
                <Typography component={Link} to="/" color="textSecondary" variant="subtitle1" sx={linkSX}>
                    {icons && <HomeTwoToneIcon style={iconSX}/>}
                    {icon && !icons && <HomeIcon style={{...iconSX, marginRight: 0}}/>}
                    {(!icon || icons) && 'Dashboard'}
                </Typography>
                {mainContent}
                {itemContent}
            </MuiBreadcrumbs>
        );
    }, [custom, links, maxItems, mainContent, itemContent, icons, linkSX, icon]);

    let breadcrumbContent: ReactNode = <Typography/>;
    if (!custom && main && main.type === 'collapse' && main.breadcrumbs) {
        breadcrumbContent = (
            <Card sx={card === false ? {mb: 3, bgcolor: 'transparent', ...sx} : {
                mb: 3,
                bgcolor: 'background.default', ...sx
            }} {...others}>
                <Box sx={{p: 2, pl: card === false ? 0 : 2}}>
                    <Grid
                        container
                        direction={rightAlign ? 'row' : 'column'}
                        justifyContent={rightAlign ? 'space-between' : 'flex-start'}
                        alignItems={rightAlign ? 'center' : 'flex-start'}
                        spacing={1}
                    >
                        {title && !titleBottom && <BTitle title={main.title}/>}
                        <Grid>{tempContent}</Grid>
                        {title && titleBottom && <BTitle title={main.title}/>}
                    </Grid>
                </Box>
                {card === false && divider && <Divider sx={{mt: 2}}/>}
            </Card>
        );
    }

    if (((item && item.type === 'item') || (item?.type === 'group' && item?.url) || custom) && item.breadcrumbs) {
        breadcrumbContent = (
            <Card sx={card === false ? {mb: 3, bgcolor: 'transparent', ...sx} : {
                mb: 3,
                bgcolor: 'background.default', ...sx
            }} {...others}>
                <Box sx={{p: 2, pl: card === false ? 0 : 2}}>
                    <Grid
                        container
                        direction={rightAlign ? 'row' : 'column'}
                        justifyContent={rightAlign ? 'space-between' : 'flex-start'}
                        alignItems={rightAlign ? 'center' : 'flex-start'}
                        spacing={1}
                    >
                        {title && !titleBottom && <BTitle title={custom ? heading : item?.title}/>}
                        <Grid>{tempContent}</Grid>
                        {title && titleBottom && <BTitle title={custom ? heading : item?.title}/>}
                    </Grid>
                </Box>
                {card === false && divider && <Divider sx={{mt: 2}}/>}
            </Card>
        );
    }

    return <>{breadcrumbContent}</>;
};

export default Breadcrumbs;

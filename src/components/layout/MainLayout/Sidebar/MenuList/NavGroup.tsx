import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import NavItem, { MenuItem } from './NavItem';
import NavCollapse from './NavCollapse';

import { FC, Fragment, useMemo } from 'react';


interface NavGroupProps {
    item: MenuItem;
}

const NavGroup: FC<NavGroupProps> = ({ item }) => {
    const theme = useTheme();

    // menu list collapse & items
    const items = useMemo(() => {
        return item.children?.map((menu) => {
            switch (menu.type) {
                case 'collapse':
                    return <NavCollapse key={menu.id} menu={menu} level={1} />;
                case 'item':
                    return <NavItem key={menu.id} item={menu} level={1} />;
                default:
                    return (
                        <Typography key={menu.id} variant="h6" color="error" align="center">
                            Menu Items Error
                        </Typography>
                    );
            }
        });
    }, [item.children]); // memoize based on item.children

    return (
        <>
            <List
                subheader={
                    item.title && (
                        <Typography variant="caption" sx={{ ...theme.typography.menuCaption }} display="block" gutterBottom>
                            {item.title}
                            {item.caption && (
                                <Typography
                                    variant="caption"
                                    sx={{ ...theme.typography.subMenuCaption }}
                                    display="block"
                                    gutterBottom
                                >
                                    {item.caption}
                                </Typography>
                            )}
                        </Typography>
                    )
                }
            >
                {items?.map((item) => (
                    <Fragment key={item.key}>
                        {item}
                    </Fragment>
                ))}
            </List>

            {/* group divider */}
            <Divider sx={{ mt: 0.25, mb: 1.25 }} />
        </>
    );
};

export default NavGroup;

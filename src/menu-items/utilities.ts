// assets
import { IconPalette, IconShadow, IconTypography } from '@tabler/icons-react';
import { MenuItem } from "@/components/layout/MainLayout/Sidebar/MenuList/NavItem.tsx";


const utilities: MenuItem = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Typography',
            type: 'item',
            url: '/utils/util-typography',
            icon: IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: '/utils/util-color',
            icon: IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: '/utils/util-shadow',
            icon: IconShadow,
            breadcrumbs: false
        }
    ]
};

export default utilities;

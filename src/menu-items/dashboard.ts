// assets
import { IconDashboard } from '@tabler/icons-react';
import { MenuItem } from "@/components/layout/MainLayout/Sidebar/MenuList/NavItem.tsx";


const dashboard: MenuItem = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/admin',
            icon: IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;

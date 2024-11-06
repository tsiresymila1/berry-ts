import { MenuItem } from "@/components/layout/MainLayout/Sidebar/MenuList/NavItem.tsx";
import { IconDatabase } from "@tabler/icons-react";


const widget: MenuItem = {
    id: 'widget',
    title: 'Widget',
    type: 'group',
    children: [
        {
            id: 'data',
            title: 'Data',
            type: 'item',
            icon: IconDatabase,
            breadcrumbs: true,
            url: '/admin/data',
        }
    ]
}
export default widget

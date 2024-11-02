// assets
import { IconCalendar, IconUser } from '@tabler/icons-react';
import { MenuItem } from "@/components/layout/MainLayout/Sidebar/MenuList/NavItem.tsx";


const application: MenuItem = {
    id: 'application',
    title: 'Application',
    type: 'group',
    children: [
        {
            id: 'user',
            title: 'Users',
            type: 'collapse',
            icon: IconUser,
            children:[
                {
                    title: "Account Profile",
                    id: "account_profile",
                    type: 'collapse',
                    icon: IconUser,
                    children:[
                        {
                            title: "Profile 01",
                            id: "profile_01",
                            type: "item",
                            breadcrumbs: true,
                            url: "/admin/users/profile01"
                        }
                    ]
                },
                {
                    title: "List",
                    id: "list_user",
                    type: 'collapse',
                    icon: IconUser,
                    children:[
                        {
                            title: "List 01",
                            id: "list_01",
                            type: "item",
                            breadcrumbs: true,
                            url: "/admin/users/list01"
                        }
                    ]
                }
            ]
        },
        {
            id: 'calendar',
            title: 'Calendar',
            type: 'item',
            url: '/admin/calendar',
            icon: IconCalendar,
            breadcrumbs: true
        }
    ]
};

export default application;

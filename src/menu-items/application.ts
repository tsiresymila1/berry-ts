// assets
import { IconCalendar } from '@tabler/icons-react';


const application = {
    id: 'application',
    title: 'Application',
    type: 'group',
    children: [
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

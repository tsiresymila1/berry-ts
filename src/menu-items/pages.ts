// assets
import { IconKey } from '@tabler/icons-react';


const pages = {
    id: 'pages',
    title: 'Pages',
    caption: 'Pages Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: IconKey,
            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/login',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/register',
                    target: true
                }
            ]
        }
    ]
};

export default pages;

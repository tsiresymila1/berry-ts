import { RouteObject } from "react-router";
import MainLayout from "@/components/layout/MainLayout";
import Loadable from "@/components/ui/Loadable.tsx";
import { lazy } from "react";

const DashboardPage = Loadable(lazy(() => import('@/views/pages/dashboard/DashboardPage')));
const CalendarPage = Loadable(lazy(() => import('@/views/application/CalendarPage')));
const ProfilePage = Loadable(lazy(() => import('@/views/application/users/profile/ProfilePage')));
const ProfilePage2 = Loadable(lazy(() => import('@/views/application/users/profile/ProfilePage2')));
const ListUserPage = Loadable(lazy(() => import('@/views/application/users/lists/ListUserPage')));
const ListUserPage2 = Loadable(lazy(() => import('@/views/application/users/lists/ListUserPage2')));
const CardUserPage = Loadable(lazy(() => import('@/views/application/users/cards/CardUserPage')));
const CardUserPage2 = Loadable(lazy(() => import('@/views/application/users/cards/CardUserPage2')));
const DataWidgetPage = Loadable(lazy(() => import('@/views/widget/data/DataWidgetPage')));

const MainRoutes: RouteObject = {
    path: '/admin',
    element: <MainLayout/>,
    children: [
        {
            path: '',
            index: true,
            element: <DashboardPage/>
        },
        {
            path: 'calendar',
            element: <CalendarPage/>
        },
        {
            path: 'data',
            element: <DataWidgetPage/>
        },
        {
            path: 'users',
            children: [
                {
                    path: "profile01",
                    element: <ProfilePage/>
                }, {
                    path: "profile02",
                    element: <ProfilePage2/>
                },
                {
                    path: "list01",
                    element: <ListUserPage/>
                },
                {
                    path: "list02",
                    element: <ListUserPage2/>
                },
                {
                    path: "card01",
                    element: <CardUserPage/>
                },

                {
                    path: "card02",
                    element: <CardUserPage2/>
                },
            ]
        }
    ]
}

export default MainRoutes

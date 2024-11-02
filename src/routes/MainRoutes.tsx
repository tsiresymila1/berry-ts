import { RouteObject } from "react-router";
import MainLayout from "@/components/layout/MainLayout";
import Loadable from "@/components/ui/Loadable.tsx";
import { lazy } from "react";

const DashboardPage = Loadable(lazy(() => import('@/views/pages/dashboard/DashboardPage')));
const CalendarPage = Loadable(lazy(() => import('@/views/pages/application/CalendarPage')));
const ProfilePage = Loadable(lazy(() => import('@/views/pages/application/users/ProfilePage')));
const ListPage = Loadable(lazy(() => import('@/views/pages/application/users/ListPage')));

const MainRoutes: RouteObject = {
    path: '/admin',
    element: <MainLayout />,
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
            path: 'users',
            children: [
                {
                    path: "profile01",
                    element: <ProfilePage />
                },
                {
                    path: "list01",
                    element: <ListPage />
                }
            ]
        }
    ]
}

export default MainRoutes

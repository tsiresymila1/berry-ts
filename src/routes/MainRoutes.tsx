import { RouteObject } from "react-router";
import MainLayout from "@/components/layout/MainLayout";
import Loadable from "@/components/ui/Loadable.tsx";
import { lazy } from "react";
// import { Outlet } from "react-router-dom";

const DashboardPage = Loadable(lazy(() => import('@/views/pages/dashboard/DashboardPage')));
const CalendarPage = Loadable(lazy(() => import('@/views/pages/application/CalendarPage')));

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
        }
    ]
}

export default MainRoutes

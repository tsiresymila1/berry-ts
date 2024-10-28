// ==============================|| ROUTING RENDER ||============================== //
import { createBrowserRouter } from "react-router-dom";
import AuthenticationRoutes from "@/routes/AuthenticationRoutes.tsx";
import MainRoutes from "@/routes/MainRoutes.tsx";

const router = createBrowserRouter([AuthenticationRoutes, MainRoutes], {
    basename: import.meta.env.VITE_APP_BASE_NAME ?? '/'
});

export default router;

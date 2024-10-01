import { createBrowserRouter } from "react-router-dom";
import { Add, Home, Login, Signup } from "../pages";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <PrivateRoutes component={<Home />} />,
    },
    {
        path: "/add",
        element: <PrivateRoutes component={<Add />} />,
    },
    {
        path: "/signup",
        element: <Signup />,
    }
]);

export default routes;
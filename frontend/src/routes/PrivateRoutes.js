import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ component }) => {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) {
        return <Navigate to="/login" />;
    }
    return component;
};

export default PrivateRoutes;
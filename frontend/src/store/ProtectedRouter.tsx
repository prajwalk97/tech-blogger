import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { getJwt } from "../reducers";

export const ProtectedRouter = ({ children }: { children: any }) => {
    const jwt = useSelector((state) => getJwt(state));
    return jwt ? children : <Navigate to={"/signinsignup"} replace />;
}
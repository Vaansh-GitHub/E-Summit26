import { Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthUserContext'
import Loading from '../components/Loading'


function AdminRoute({ children }) {
    const { authUser, loading , userRole } = useAuth();
    // console.log(authUser)

    if (loading || userRole === null) return <Loading />;
    if (!authUser) return <Navigate to="/login" replace />;
    if (userRole !== "admin") return <Navigate to="/denied" replace />;
    return children
}

export default AdminRoute;
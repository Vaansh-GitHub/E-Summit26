import { Navigate } from "react-router-dom";
import { useAuth } from '../context/AuthUserContext'
import Loading from '../components/Loading'


function PrivateRoute({ children }) {
    const { authUser, loading } = useAuth();
    // console.log(authUser)

    if (loading) return <Loading />
    if (!authUser) return <Navigate to="/login" replace />;
    return children
}

export default PrivateRoute;
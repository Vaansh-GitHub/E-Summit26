import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Page';
import Register from '../pages/register/Page';
import Login from '../pages/login/Page'
import AuthLayouts from '../layout';
import AdminDashboard from '../pages/admin/AdminDashboard'
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Denied from '../components/Denied'
import Store from '../pages/store/Page'



const router = createBrowserRouter([
    {
        path:'/',
        element : <AuthLayouts> <App/></AuthLayouts> ,
        children : [
            {
                index: true,
                element : <Home />
            },
            {
                path: 'home',
                element : <Home />
            },
            {
                path:'register',
                element: <Register />,
            },
            {
                path : 'login',
                element : <Login />
            },
            {
                path: 'denied',
                element : <Denied/>
            },
            {
                path: 'store',
                element: <PrivateRoute><Store/></PrivateRoute>
            },
            {
                path:'admin/dashboard',
                element:<AdminRoute><AdminDashboard/></AdminRoute>
            }
        ]
    }
])


export default router;
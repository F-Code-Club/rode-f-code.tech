import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import ErrorPage from '../Pages/404Page';
import AllAccounts from '../Pages/Accounts/AllAccounts';
import AdminAttendance from '../Pages/AdminManagement/AdminAttendance';
import AdminRoom from '../Pages/AdminManagement/AdminRoom';
import AdminRoomEdit from '../Pages/AdminManagement/AdminRoomEdit';
import AdminRoomView from '../Pages/AdminManagement/AdminRoomView';
import CreateRoom from '../Pages/AdminManagement/CreateRoom';
import Algorithm from '../Pages/Algorithm';
import CreateRoom from '../Pages/CreateRoom';
import ArenaCSS from '../Pages/CssBattle';
import TestCodeMirror from '../Pages/CssBattle';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import TestTabs from '../Pages/Test/TestTabs';
import AdminLayoutComponent from '../components/Layout/AdminLayout.component';
import Loading from '../components/Loading';
import TestAlert from '../components/TestAlert';
import UserHomeLayout from '../components/UserHomeLayout/UserHomeLayout.component';
import UserLayoutComponent from '../components/UserLayout/UserLayout.component';
import AdminRoute from './AdminRoute';
import PublicRoute from './PublicRoute';
import { loaderInfoGG, GetInfoRoomByCode } from './RouterLoader/Loader';

const RouterComponent = () => {
    const router = createBrowserRouter([
        { exact: true, path: '/', element: <Navigate to="home" /> },
        {
            exact: true,
            path: '/login',
            loader: Loading,
            element: (
                <UserLayoutComponent>
                    <Login />
                </UserLayoutComponent>
            ),
        },
        {
            exact: true,
            path: '/register',
            loader: loaderInfoGG,
            element: (
                <UserLayoutComponent>
                    <Register />
                </UserLayoutComponent>
            ),
        },
        {
            path: '/',
            exact: true,
            element: <PublicRoute />,
            children: [
                {
                    exact: true,
                    loader: Loading,
                    element: <UserHomeLayout />,
                    children: [
                        {
                            exact: true,
                            path: 'home',
                            loader: Loading,
                            element: <Home />,
                        },
                    ],
                },
                {
                    exact: true,

                    loader: Loading,
                    element: <UserLayoutComponent />,
                    children: [
                        { exact: true, path: 'alert', loader: Loading, element: <TestAlert /> },
                        {
                            exact: true,
                            path: 'testMirror',
                            loader: Loading,
                            element: <TestCodeMirror />,
                        },
                        {
                            exact: true,
                            path: 'arena_css/:id',
                            loader: GetInfoRoomByCode,
                            element: <ArenaCSS />,
                        },
                        {
                            exact: true,
                            path: 'algorithm/:id',
                            loader: GetInfoRoomByCode,
                            element: <Algorithm />,
                        },
                        {
                            exact: true,
                            path: 'testTabs',
                            loader: Loading,
                            element: <TestTabs />,
                        },
                    ],
                },
            ],
        },
        {
            exact: true,
            element: <AdminRoute />,
            children: [
                {
                    exact: true,
                    path: 'admin',
                    loader: Loading,
                    element: <AdminLayoutComponent />,
                    children: [
                        {
                            exact: true,
                            path: 'room',
                            loader: Loading,
                            element: <AdminRoom />,
                        },
                        {
                            exact: true,
                            path: 'room/:id',
                            loader: Loading,
                            element: <AdminRoomView />,
                        },
                        {
                            exact: true,
                            path: 'room/edit/:id',
                            loader: Loading,
                            element: <AdminRoomEdit />,
                        },
                        {
                            exact: true,
                            path: 'room/create-room',
                            loader: Loading,
                            element: <CreateRoom />,
                        },
                        {
                            exact: true,
                            path: 'allAccounts',
                            loader: Loading,
                            element: <AllAccounts />,
                        },
                        {
                            exact: true,
                            path: 'create',
                            loader: Loading,
                            element: <CreateRoom />,
                        },
                        {
                            exact: true,
                            path: 'attendance/:id',
                            loader: Loading,
                            element: <AdminAttendance />,
                        },
                    ],
                },
            ],
        },
        { path: '*', element: <ErrorPage /> },
    ]);

    return <RouterProvider fallbackElement={<Loading />} router={router} />;
};

export default RouterComponent;

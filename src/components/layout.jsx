import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from './Navigation/sidebar.jsx';
import Home from '@/routes/home.jsx';
import Map from '@/routes/map.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/map",
        element: <Map />
    },
    {
        path: "/settings",
        element: <div>Settings</div>
    },
    {
        path: "/about",
        element: <div>About</div>
    },
]);

export default function Layout({ children }) {

    return (
        <div className="flex flex-row">
            <Sidebar />
            <main className="w-full">
                <RouterProvider router={router} />
                {children}
            </main>
        </div>        
    )
}
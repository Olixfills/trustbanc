import {
    createBrowserRouter,
} from "react-router-dom";
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/",
    element: <Dashboard />,
    children: [
        {
          path: "home",
          element: <Home />,
        },]
      }
])
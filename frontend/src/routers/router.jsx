import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import Register from '../components/Register';
import LogIn from '../components/login';



const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/orders",
            element: <div>Orders</div>
        },
        {
            path: "/about",
            element: <div>About</div>
        },
        {
          path: "/login",
          element: <LogIn />
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    },
  ]);

  export default router;
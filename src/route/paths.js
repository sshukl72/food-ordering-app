import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import Body from "../components/Body";
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ],
        errorElement: <Error />
    }
]);

export default appRouter;
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    }
]);

export default appRouter;

import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Main from "../Main";
import About from "../About";
import TopRated from "../TopRated";
import Cart from "../Cart";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "top-rated",
                element: <TopRated />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
]);


export default routes;
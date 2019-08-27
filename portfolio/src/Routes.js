import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

/**
 * Global Routes
 */
export const globalRoutes = [
    {
        component: Home,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/about',
                exact: true,
                component: About
            },
            {
                path: '/projects',
                exact: true,
                component: Projects
            }
        ]
    }
]
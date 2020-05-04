import Recipes from "./components/Recipes";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Registration from "./components/Registration";

const routes = [
    {
        path: '/',
        component: Recipes,
        meta: {authenticated: true}
    },
    {
        path: '/login',
        component: Login,
        meta: {visitor: true}
    },
    {
        path: '/register',
        component: Registration,
        meta: {visitor: true}
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/recipes',
        component: Recipes,
        meta: {authenticated: true}
    },
    {
        path: '*',
        component: NotFound
    }
]

export default routes;
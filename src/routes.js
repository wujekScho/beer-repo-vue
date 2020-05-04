import Recipes from "./components/Recipes";
import About from "./components/About";
import NotFound from "./components/NotFound";
import LoginModal from "./components/LoginModal";
import RegistrationModal from "./components/RegistrationModal";

const routes = [
    {
        path: '/',
        component: Recipes,
        meta: {authenticated: true}
    },
    {
        path: '/login',
        component: LoginModal,
        meta: {visitor: true}
    },
    {
        path: '/register',
        component: RegistrationModal,
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
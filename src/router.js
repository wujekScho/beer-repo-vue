import VueRouter from "vue-router";
import routes from "./routes";
import store from "./store/store";


const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authenticated)) {
        if (!store.getters.loggedIn) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.visitor)) {
        if (store.getters.loggedIn) {
            next({
                path: '/recipes'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
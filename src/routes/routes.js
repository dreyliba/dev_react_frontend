import Login from "../modules/login/pages/login"

const routes = [
    {
        path: "/",
        component: Login,
        auth: false,
    },
]

export default routes;
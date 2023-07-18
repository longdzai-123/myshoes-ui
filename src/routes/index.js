
import Home from "../pages/Home"
import LayoutLogin from "../components/Layout/LayoutLogin"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ProductDetails from "../pages/ProductDetails"

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: LayoutLogin },
    { path: '/register', component: Register, layout: LayoutLogin },
    { path: '/product/:id', component: ProductDetails, layout: LayoutLogin }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes } 

import Home from "../pages/Home"
import LayoutLogin from "../layouts/LayoutLogin"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ProductDetails from "../pages/ProductDetails"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"
import Order from "../pages/Order"

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: LayoutLogin },
    { path: '/register', component: Register, layout: LayoutLogin },
    { path: '/product/:id', component: ProductDetails, layout: LayoutLogin },
    { path: '/cart', component: Cart, layout: LayoutLogin },
    { path: '/checkout', component: Checkout, layout: LayoutLogin },
    { path: '/order', component: Order, layout: LayoutLogin }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes } 
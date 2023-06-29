import { ADMIN_ROUTE, HOME_ROUTE, ARTICLES_ROUTE, CATALOG_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import ProductPage from "./pages/ProductPage/ProductPage"
import Auth from "./pages/Auth/Auth"
import Catalog from "./pages/Catalog/Catalog"
import AdminPanel from "./pages/AdminPanel/AdminPanel"
import Articles from "./pages/Articles/Articles"
import Contacts from "./pages/Contacts/Contacts"
import Home from "./pages/Home/Home"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: ARTICLES_ROUTE,
        Component: Articles
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    // {
    //     path: WISHLIST_ROUTE,
    //     Component: WishList
    // },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    
]
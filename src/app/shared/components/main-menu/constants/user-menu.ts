import { MenuItem } from "src/app/shared/models/menu.interface";

export const userNavMenu: MenuItem[] = [{
    name: "Home",
    url: "/",
    mobileOnly: false
},
{
    name: "Products",
    url: "/products",
    mobileOnly: false
},
{
    name: "My Account",
    url: "/account",
    mobileOnly: false
},
{
    name: "Contact Us",
    url: "/contacts",
    mobileOnly: false
},
{
    name: "Login",
    url: "/login",
    mobileOnly: true
},
{
    name: "Shortlist",
    url: "/shortist",
    mobileOnly: true
},
{
    name: "Shopping Cart",
    url: "/cart",
    mobileOnly: true
}];
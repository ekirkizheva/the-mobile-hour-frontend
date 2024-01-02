import { MenuItem } from "src/app/shared/models/menu.interface";

export const adminNavMenu: MenuItem[] = [{
    name: "Home",
    url: "/admin",
    mobileOnly: false
},
{
    name: "Products",
    url: "/products",
    mobileOnly: false
},
{
    name: "Manage Products",
    url: "/admin/manage-products",
    mobileOnly: false
},
{
    name: "Manage Users",
    url: "/admin/manage-users",
    mobileOnly: false
},
{
    name: "Change Log",
    url: "/admin/change-log",
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
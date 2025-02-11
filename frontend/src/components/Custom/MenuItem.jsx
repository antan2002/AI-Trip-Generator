import { IoHome } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
export const MenuItems = [
    {
        title: "Home",
        url: "/",
        cName: "nav-links",
        icon: <IoHome />
    },
    {
        title: "About",
        url: "/about",
        cName: "nav-links",
        icon: <FaInfoCircle />
    },
    {
        title: "Service",
        url: "/service",
        cName: "nav-links",
        icon: <FaServicestack />
    },
    {
        title: "Contact",
        url: "/contact",
        cName: "nav-links",
        icon: <IoIosContact />
    },
    {
        title: "Profile",
        url: "/profile",
        cName: "nav-links",
        icon: <CgProfile />
    }
    // {
    //     title: "Sign Up",
    //     url: "/",
    //     cName: "nav-links-sign",
    // },
]
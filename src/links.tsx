import {
    BsPeopleFill,
    BsPersonFill,
    BsQuestionCircleFill,
    BsHouseFill,
} from "react-icons/bs";
import {
    MdPermContactCalendar,
    MdEmail,
} from "react-icons/md";

export const links = [
    {
        title: "",
        links: [
            {
                name: "Dashboard",
                route: "/dashboard",
                icon: <BsHouseFill />,
            },
        ],
    },

    {
        title: "DATA",
        links: [
            {
                name: "Profile",
                route: "/profile",
                icon: <BsPersonFill />,
            },
            {
                name: "Manage team",
                route: "/manage",
                icon: <BsPeopleFill />,
            },
            {
                name: "Customers",
                route: "/customers",
                icon: <MdPermContactCalendar />,
            },
        ],
    },
];

export const profileLinks = [
    {
        name: "Inbox",
        icon: <MdEmail />,
    },
    {
        name: "FAQ",
        icon: <BsQuestionCircleFill />,
    },
];

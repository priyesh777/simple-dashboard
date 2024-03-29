import Container from "../Layout/Container/Container";
import Dashboard from "../components/Dashboard/Dashboard";
import Area from "./Area/Area";
import Bar from "./Bar/Bar";
import Customers from "./Customers/Customers";
import Line from "./Line/Line";
import Manage from "./Manage/Manage";
import Login from "./Login/Login";
import Register from "./Register/Register";
import UserProfile from "./UserProfile/UserProfile";

export const routes = [

    {
        path: "/",
        element: (
            <Login />
        ),
    },
    {
        path: "/register",
        element: (
            <Register />
        ),
    },
    {
        path: "/dashboard",
        element: (
            <Container>
                <Dashboard />
            </Container>
        ),
    },

    // Data
    {
        path: "/profile",
        element: (
            <Container>
                <UserProfile />
            </Container>
        ),
    },
    {
        path: "/manage",
        element: (
            <Container>
                <Manage />
            </Container>
        ),
    },
    {
        path: "/customers",
        element: (
            <Container>
                <Customers />
            </Container>
        ),
    },

    // Charts
    {
        path: "/bar",
        element: (
            <Container>
                <Bar />
            </Container>
        ),
    },
    {
        path: "/area",
        element: (
            <Container>
                <Area />
            </Container>
        ),
    },
    {
        path: "/line",
        element: (
            <Container>
                <Line />
            </Container>
        ),
    },
];

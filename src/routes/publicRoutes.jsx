import { MainLayout } from "@/features/public/layout/navigation";
import { Home } from "@/features/public/home/pages";
import LoginForm from "@/features/public/home/pages/auth/LoginForm";
import RegisterForm from "@/features/public/home/pages/auth/RegisterForm";

const PublicLayout = () => {
    return (
        <>
            <MainLayout />
        </>
    );
};

export const publicRoutes = [
    {
        element: <PublicLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <LoginForm/>
            },
            {
                path: "/register",
                element: <RegisterForm/>
            },
        ],
    },
];

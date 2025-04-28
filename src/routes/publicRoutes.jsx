import { MainLayout } from "@/features/public/layout/navigation";
import { Home, Profile } from "@/features/public/home/pages";
import LoginForm from "@/features/public/home/pages/auth/LoginForm";
import RegisterForm from "@/features/public/home/pages/auth/RegisterForm";
import AppointmentForm from "@/features/public/home/pages/AppointmentForm";
import HistorialReservas from "@/features/public/home/pages/HistorialReservas";

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
            {
                path: "/reservas",
                element: <AppointmentForm/>
            },
            {
                path: "/perfil",
                element: <Profile/>
            },
            {
                path: "/historial",
                element: <HistorialReservas/>
            },
        ],
    },
];

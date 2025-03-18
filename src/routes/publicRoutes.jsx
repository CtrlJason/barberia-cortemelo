import { MainLayout } from "@/features/public/layout/navigation";
import { Home } from "@/features/public/home/pages";

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
        ],
    },
];

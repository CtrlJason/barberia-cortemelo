import { useRoutes } from "react-router-dom";
import { publicRoutes } from "@/routes/publicRoutes";

const AppRoutes = () => {
    const allRoutes = [...publicRoutes];
    const routes = useRoutes(allRoutes);
    return routes;
};

export default AppRoutes;

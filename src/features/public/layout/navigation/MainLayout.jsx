import Navbar from "@/features/public/layout/navigation/Navbar";
import Footer from "@/features/public/layout/navigation/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
import "./styles/App.css";
import { AuthProvider } from "@/features/public/home/pages/auth/AuthContext";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<AppRoutes />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;

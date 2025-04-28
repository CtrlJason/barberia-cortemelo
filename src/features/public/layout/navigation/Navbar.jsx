import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "@/features/public/home/pages/auth/AuthContext";

// Estructura de navegación
const navigationLinks = [
    {
        name: "Inicio",
        path: "/",
        hasSublinks: false,
    },
    {
        name: "Servicios",
        path: "/servicios",
        hasSublinks: true,
        sublinks: [
            { name: "Cortes de Cabello", path: "/servicios/cortes" },
            { name: "Barba", path: "/servicios/barba" },
            { name: "Tratamientos", path: "/servicios/tratamientos" },
        ],
    },
    {
        name: "Galería",
        path: "/galeria",
        hasSublinks: false,
    },
    {
        name: "Sobre Nosotros",
        path: "/sobre-nosotros",
        hasSublinks: false,
    },
    {
        name: "Contacto",
        path: "/contacto",
        hasSublinks: false,
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSublinks, setOpenSublinks] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, logout } = useAuth();
    const [showUserMenu, setShowUserMenu] = useState(false);

    // Detectar scroll para cambiar el estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleSublinks = (index) => {
        if (openSublinks === index) {
            setOpenSublinks(null);
        } else {
            setOpenSublinks(index);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? "bg-stone-900 shadow-lg py-2"
                    : "bg-transparent py-4"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <NavLink
                            to="/"
                            className={`font-bold text-xl ${
                                isScrolled ? "text-white" : "text-amber-400"
                            }`}
                        >
                            <span
                                className={`${
                                    isScrolled ? "text-amber-400" : "text-white"
                                }`}
                            >
                                Coot
                            </span>{""}
                            ters
                        </NavLink>
                    </div>

                    {/* Links de navegación - Escritorio */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="flex items-center space-x-4">
                            {navigationLinks.map((link, index) => (
                                <div key={index} className="relative group">
                                    {link.hasSublinks ? (
                                        <>
                                            <button
                                                className={`text-stone-200 hover:text-amber-300 px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-300 ${
                                                    !isScrolled
                                                        ? "text-white hover:text-amber-300"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    toggleSublinks(index)
                                                }
                                            >
                                                {link.name}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="ml-1 h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </button>
                                            <div className="absolute hidden group-hover:block z-10 top-8 left-0 w-48 rounded-md bg-stone-800 shadow-lg transition-all duration-300 mt-1">
                                                <div className="py-1">
                                                    {link.sublinks.map(
                                                        (sublink, subIndex) => (
                                                            <NavLink
                                                                key={subIndex}
                                                                to={
                                                                    sublink.path
                                                                }
                                                                className="block px-4 py-2 text-sm font-medium text-stone-300 hover:bg-stone-700 hover:text-amber-300 transition duration-300"
                                                            >
                                                                {sublink.name}
                                                            </NavLink>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? `text-amber-400 px-3 py-2 rounded-md text-sm font-medium border-b-2 border-amber-500 transition duration-300 ${
                                                          !isScrolled
                                                              ? "text-white"
                                                              : ""
                                                      }`
                                                    : `text-stone-300 hover:text-amber-300 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
                                                          !isScrolled
                                                              ? "text-white hover:text-amber-300"
                                                              : ""
                                                      }`
                                            }
                                        >
                                            {link.name}
                                        </NavLink>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botón de reserva - Escritorio */}
                    <div className="hidden md:flex items-center space-x-2">
                        {user ? (
                            <div className="relative group">
                                <button
                                    onMouseEnter={() => setShowUserMenu(true)}
                                    onMouseLeave={() => setShowUserMenu(false)}
                                    className="flex items-center px-4 py-2 text-sm font-medium rounded-md bg-stone-800 text-white hover:bg-stone-700 transition duration-300"
                                >
                                    <span className="mr-2 font-semibold">{user.name}</span>
                                    <span className="text-xs text-stone-300">({user.email})</span>
                                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {showUserMenu && (
                                    <div
                                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20"
                                        onMouseEnter={() => setShowUserMenu(true)}
                                        onMouseLeave={() => setShowUserMenu(false)}
                                    >
                                        <Link to="/perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Ver perfil</Link>
                                        <Link to="/historial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Historial de cortes</Link>
                                        <button
                                            onClick={logout}
                                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                        >
                                            Cerrar sesión
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                <NavLink
                                    to="/login"
                                    className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md shadow-md transition duration-300 ${
                                        isScrolled
                                            ? "text-stone-900 bg-white hover:bg-amber-100 border border-amber-400"
                                            : "text-stone-900 bg-white hover:bg-amber-100 border border-amber-400"
                                    }`}
                                    style={{ marginRight: 8 }}
                                >
                                    Iniciar sesión
                                </NavLink>
                                <NavLink
                                    to="/reservas"
                                    className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md shadow-md transition duration-300 ${
                                        isScrolled
                                            ? "text-stone-900 bg-amber-400 hover:bg-amber-500"
                                            : "text-stone-900 bg-amber-400 hover:bg-amber-500 border border-amber-500/30"
                                    }`}
                                >
                                    Reservar Ahora
                                </NavLink>
                            </>
                        )}
                    </div>

                    {/* Botón de menú móvil */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-300 ${
                                isScrolled
                                    ? "text-stone-400 hover:text-amber-400 hover:bg-stone-700"
                                    : "text-white hover:text-amber-400"
                            }`}
                        >
                            <span className="sr-only">
                                Abrir menú principal
                            </span>
                            {isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú móvil */}
            {isOpen && (
                <div className="md:hidden bg-stone-800/95 backdrop-blur-sm mt-2 rounded-lg mx-2 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigationLinks.map((link, index) => (
                            <div key={index}>
                                {link.hasSublinks ? (
                                    <>
                                        <button
                                            className="text-stone-300 hover:text-amber-300 block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center justify-between transition duration-300"
                                            onClick={() =>
                                                toggleSublinks(index)
                                            }
                                        >
                                            {link.name}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </button>
                                        {openSublinks === index && (
                                            <div className="pl-4 bg-stone-700 rounded-md mt-1">
                                                {link.sublinks.map(
                                                    (sublink, subIndex) => (
                                                        <NavLink
                                                            key={subIndex}
                                                            to={sublink.path}
                                                            className="text-stone-300 hover:text-amber-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                                                            onClick={toggleMenu}
                                                        >
                                                            {sublink.name}
                                                        </NavLink>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-amber-400 block px-3 py-2 rounded-md text-base font-medium border-l-4 border-amber-500 bg-stone-700 transition duration-300"
                                                : "text-stone-300 hover:text-amber-300 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                                        }
                                        onClick={toggleMenu}
                                    >
                                        {link.name}
                                    </NavLink>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="pt-4 pb-3 border-t border-stone-600">
                        <div className="flex flex-col items-center justify-center px-5 space-y-2">
                            <NavLink
                                to="/login"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-stone-900 bg-white hover:bg-amber-100 w-full shadow-md transition duration-300"
                                onClick={toggleMenu}
                            >
                                Iniciar sesión
                            </NavLink>
                            <NavLink
                                to="/reservas"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-stone-900 bg-amber-400 hover:bg-amber-500 w-full shadow-md transition duration-300"
                                onClick={toggleMenu}
                            >
                                Reservar Ahora
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

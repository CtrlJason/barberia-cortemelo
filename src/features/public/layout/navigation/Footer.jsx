import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Enlaces del footer agrupados por categoría
    const footerLinks = [
        {
            title: "Servicios",
            links: [
                { name: "Cortes de Cabello", path: "/servicios/cortes" },
                { name: "Barba", path: "/servicios/barba" },
                { name: "Tratamientos", path: "/servicios/tratamientos" },
                { name: "Servicios Especiales", path: "/servicios/especiales" },
            ],
        },
        {
            title: "Información",
            links: [
                { name: "Sobre Nosotros", path: "/sobre-nosotros" },
                { name: "Contacto", path: "/contacto" },
                { name: "Preguntas Frecuentes", path: "/faq" },
                { name: "Política de Privacidad", path: "/privacidad" },
            ],
        },
        {
            title: "Contacto",
            links: [
                { name: "Dirección: Av. Principal #123", path: null },
                { name: "Teléfono: (123) 456-7890", path: null },
                { name: "Email: info@barberiakevin.com", path: null },
                { name: "Horario: Lun-Sáb 9AM-8PM", path: null },
            ],
        },
    ];

    // Iconos de redes sociales
    const socialLinks = [
        {
            name: "Facebook",
            icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
            path: "#",
        },
        {
            name: "Instagram",
            icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
            path: "#",
        },
        {
            name: "Twitter",
            icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
            path: "#",
        },
        {
            name: "YouTube",
            icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
            path: "#",
        },
    ];

    return (
        <footer className="bg-stone-900 text-stone-300">
            {/* Sección principal del footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo y descripción */}
                    <div className="col-span-1">
                        <Link to="/" className="flex items-center mb-4">
                            <span className="font-bold text-2xl text-white">
                                <span className="text-amber-400">Barbería</span>{" "}
                                Kevin
                            </span>
                        </Link>
                        <p className="text-sm mb-4 text-stone-400">
                            Ofrecemos servicios de barbería de alta calidad, con
                            profesionales experimentados y un ambiente único
                            para nuestros clientes.
                        </p>
                        {/* Redes sociales */}
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.path}
                                    className="text-stone-400 hover:text-amber-400 transition duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                >
                                    <svg
                                        className="h-5 w-5 fill-current"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d={social.icon} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Enlaces agrupados por categorías */}
                    {footerLinks.map((group, groupIndex) => (
                        <div key={groupIndex} className="col-span-1">
                            <h3 className="text-lg font-semibold text-amber-400 mb-4">
                                {group.title}
                            </h3>
                            <ul className="space-y-2">
                                {group.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        {link.path ? (
                                            <Link
                                                to={link.path}
                                                className="text-sm text-stone-400 hover:text-amber-300 transition duration-300"
                                            >
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <span className="text-sm text-stone-400">
                                                {link.name}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mapa de ubicación */}
            <div className="w-full bg-stone-800 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-lg font-semibold text-amber-400 mb-4 text-center">
                        Nuestra Ubicación
                    </h3>
                    <div className="w-full flex items-center justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7515393478993!2d-74.19686398962918!3d4.638354895316985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ddd5fc16ed5%3A0x7594d7d85a6acd33!2sBARBERIA%20Y%20PELUQUERIA%20BLACK%20%26%20WHITE!5e0!3m2!1ses!2sco!4v1742263443247!5m2!1ses!2sco"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg shadow-lg"
                            title="Ubicación de la Barbería"
                        ></iframe>
                    </div>
                    <div className="mt-4 text-center">
                        <a
                            href="https://goo.gl/maps/XYZ123"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-amber-400 hover:text-amber-300 transition duration-300"
                        >
                            <span>Cómo llegar</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Barra inferior con copyright */}
            <div className="bg-stone-950 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-stone-500 mb-2 md:mb-0">
                            © {currentYear} Barbería Kevin. Todos los derechos
                            reservados.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                to="/terminos"
                                className="text-xs text-stone-500 hover:text-stone-400 transition duration-300"
                            >
                                Términos y Condiciones
                            </Link>
                            <Link
                                to="/privacidad"
                                className="text-xs text-stone-500 hover:text-stone-400 transition duration-300"
                            >
                                Política de Privacidad
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

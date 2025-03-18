import { Link } from "react-router-dom";

const SERVICIOS = [
    {
        id: 1,
        nombre: "Corte Clásico",
        descripcion:
            "Corte tradicional con tijeras y acabado con navaja para un look elegante y refinado.",
        precio: "$25.000",
        icono: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M14.5 3l1-1.5 1 1.5c.5.667 1.7 2.4 0 4h-2c-1.7-1.6-.5-3.333 0-4z" />
                <path d="M12.5 8l-8 8" />
                <path d="M9.5 11l-3 3" />
                <path d="M4.5 19l-1-1.5 1-1.5" />
                <path d="M8.5 15l-3.5 3.5" />
                <path d="M21.5 8h-3a2 2 0 00-2 2v8a2 2 0 002 2h3a2 2 0 002-2v-8a2 2 0 00-2-2z" />
            </svg>
        ),
    },
    {
        id: 2,
        nombre: "Afeitado de Barba",
        descripcion:
            "Afeitado tradicional con navaja, toallas calientes y productos premium para el cuidado de la piel.",
        precio: "$20.000",
        icono: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 6h18v12H3z" />
                <path d="M3 12h18" />
                <path d="M7.5 12v6" />
                <path d="M16.5 12v6" />
                <path d="M3 4l2-2h14l2 2" />
            </svg>
        ),
    },
    {
        id: 3,
        nombre: "Corte + Barba",
        descripcion:
            "Combinación de nuestro corte clásico y servicio de barba para una experiencia completa.",
        precio: "$40.000",
        icono: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M3 7h6l2-4h2l2 4h6v4h-4l-1 5-7-5H3z" />
                <path d="M9 17v-4" />
                <path d="M15 13v4" />
            </svg>
        ),
    },
    {
        id: 4,
        nombre: "Tratamiento Capilar",
        descripcion:
            "Tratamiento hidratante y revitalizante para mantener tu cabello saludable y con brillo.",
        precio: "$35.000",
        icono: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M7 21L4.2 18.2C3.1 17.1 2.5 15.7 2.5 14.1C2.5 12.5 3.1 11 4.2 10l6.4-6.5C11.3 2.9 12.1 2.5 13 2.5H15.5C17.4 2.5 19 4.1 19 6V8.5C19 9.4 18.6 10.2 18 10.9L11.5 17.3C10.4 18.4 9 19 7.4 19" />
                <path d="M16 9h-4.5" />
                <path d="M8 14L4 18" />
            </svg>
        ),
    },
];

const Services = () => {
    return (
        <section className="py-16 bg-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Nuestros{" "}
                        <span className="text-amber-600">Servicios</span>
                    </h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        Ofrecemos una variedad de servicios de alta calidad para
                        satisfacer todas tus necesidades de estilo y cuidado
                        personal.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICIOS.map((servicio) => (
                        <div
                            key={servicio.id}
                            className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl border border-stone-200"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="text-amber-500">
                                    {servicio.icono}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-stone-800 mb-2 text-center">
                                {servicio.nombre}
                            </h3>
                            <p className="text-stone-600 mb-4 text-center">
                                {servicio.descripcion}
                            </p>
                            <div className="text-center mb-4">
                                <span className="text-amber-600 font-bold text-xl">
                                    {servicio.precio}
                                </span>
                            </div>
                            <div className="text-center">
                                <Link
                                    to="/reservas"
                                    className="inline-block px-4 py-2 bg-stone-800 text-amber-300 rounded-md hover:bg-amber-600 hover:text-white transition duration-300"
                                >
                                    Reservar
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        to="/servicios"
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-stone-900 bg-amber-400 hover:bg-amber-500 shadow-md transition duration-300"
                    >
                        Ver todos los servicios
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Services;

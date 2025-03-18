const CARRUSEL_IMAGENES = [
    {
        id: 1,
        imagen: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
        titulo: "Barbería con estilo",
        descripcion: "Cortes modernos para el hombre de hoy",
    },
    {
        id: 2,
        imagen: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2008&auto=format&fit=crop",
        titulo: "Experiencia única",
        descripcion: "Atención personalizada para cada cliente",
    },
    {
        id: 3,
        imagen: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
        titulo: "Profesionales expertos",
        descripcion: "Los mejores barberos a tu servicio",
    },
];

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    const [imagenActual, setImagenActual] = useState(0);

    // Función para pasar a la siguiente imagen
    const siguienteImagen = () => {
        setImagenActual(
            imagenActual === CARRUSEL_IMAGENES.length - 1 ? 0 : imagenActual + 1
        );
    };

    // Función para ir a la imagen anterior
    const anteriorImagen = () => {
        setImagenActual(
            imagenActual === 0 ? CARRUSEL_IMAGENES.length - 1 : imagenActual - 1
        );
    };

    // Cambio automático de imagen cada 8 segundos
    useEffect(() => {
        const intervalo = setInterval(() => {
            siguienteImagen();
        }, 7000);

        return () => clearInterval(intervalo);
    }, [imagenActual]);

    return (
        <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
            {/* Carrusel de imágenes */}
            <div className="relative h-full w-full">
                {CARRUSEL_IMAGENES.map((item, index) => (
                    <div
                        key={item.id}
                        className={`absolute top-0 left-0 h-full w-full transition-opacity duration-1000 ${
                            index === imagenActual ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <img
                            src={item.imagen}
                            alt={item.titulo}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/95 via-stone-900/70 to-stone-900/30 flex flex-col items-center justify-center px-4 md:px-0">
                            <h1 className="text-4xl md:text-7xl font-bold mb-4 text-center text-white drop-shadow-lg">
                                <span className="text-amber-400 drop-shadow-md">
                                    {item.titulo}
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl text-stone-100 drop-shadow-lg">
                                {item.descripcion}
                            </p>
                            <Link
                                to="/reservas"
                                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-stone-900 bg-amber-400 hover:bg-amber-500 shadow-lg transform hover:scale-105 transition duration-300 border border-amber-500/30 cursor-pointer"
                            >
                                Reservar ahora
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botones de navegación */}
            <button
                onClick={anteriorImagen}
                className="absolute left-5 top-1/2 -translate-y-1/2 bg-stone-800/70 hover:bg-amber-500 text-stone-200 hover:text-stone-900 p-4 rounded-full shadow-lg transform hover:scale-110 transition duration-300 focus:outline-none border border-stone-700 cursor-pointer"
                aria-label="Anterior imagen"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                onClick={siguienteImagen}
                className="absolute right-5 top-1/2 -translate-y-1/2 bg-stone-800/70 hover:bg-amber-500 text-stone-200 hover:text-stone-900 p-4 rounded-full shadow-lg transform hover:scale-110 transition duration-300 focus:outline-none border border-stone-700 cursor-pointer"
                aria-label="Siguiente imagen"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            {/* Indicadores de posición */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {CARRUSEL_IMAGENES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setImagenActual(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                            index === imagenActual
                                ? "bg-amber-400 scale-125"
                                : "bg-stone-300 hover:bg-amber-200"
                        }`}
                        aria-label={`Ir a la imagen ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;

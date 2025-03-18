const TESTIMONIOS = [
    {
        id: 1,
        nombre: "Carlos Rodríguez",
        cargo: "Empresario",
        comentario:
            "Increíble servicio, me encanta cómo queda mi barba después de un afeitado tradicional. El ambiente es muy acogedor y el personal muy profesional.",
        imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
        id: 2,
        nombre: "Juan Pérez",
        cargo: "Ingeniero",
        comentario:
            "Los mejores cortes de la ciudad. Siempre salgo satisfecho y con un look renovado. Los recomiendo ampliamente para cualquier tipo de cabello.",
        imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
    {
        id: 3,
        nombre: "Alejandro Martínez",
        cargo: "Diseñador Gráfico",
        comentario:
            "Ambiente único, atención personalizada y resultados excelentes. Desde que descubrí esta barbería no voy a ningún otro lugar.",
        imagen: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-stone-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Lo que dicen nuestros{" "}
                        <span className="text-amber-400">Clientes</span>
                    </h2>
                    <p className="text-stone-300 max-w-2xl mx-auto">
                        La satisfacción de nuestros clientes es nuestra mayor
                        recompensa. Descubre por qué confían en nosotros.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIOS.map((testimonio) => (
                        <div
                            key={testimonio.id}
                            className="bg-stone-700 rounded-lg p-6 shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-amber-900/20 border border-stone-600 cursor-default"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonio.imagen}
                                    alt={testimonio.nombre}
                                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-amber-400"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-amber-300">
                                        {testimonio.nombre}
                                    </h3>
                                    <p className="text-stone-400 text-sm">
                                        {testimonio.cargo}
                                    </p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <svg
                                    className="h-8 w-8 text-amber-500 opacity-30 mb-2"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-stone-300">
                                    {testimonio.comentario}
                                </p>
                            </div>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="h-5 w-5 text-amber-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

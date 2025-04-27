import { useState } from "react"

export default function CrearUsuario() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg relative">
        <div className="absolute inset-0 rounded-lg bg-yellow-500 opacity-10 blur-md"></div>
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center relative z-10">
          CREA TU USUARIO
        </h2>
        <form className="space-y-4 relative z-10">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
          />
          <input
            type="text"
            placeholder="Apellido"
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Correo"
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Crear contraseña"
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Confirmar contraseña"
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 rounded-md transition duration-300"
          >
            Crear usuario
          </button>
        </form>
      </div>
    </div>
  );
}


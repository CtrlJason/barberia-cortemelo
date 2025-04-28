import { useState } from "react";
import { login } from "../../../../../services/auth.service";
import { useAuth } from "./AuthContext";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login: loginContext } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      // Guardar usuario y token en el contexto
      loginContext({
        name: response.user?.name,
        email: response.user?.email,
        token: response.token,
      });
      alert("Inicio de sesión exitoso");
      console.log("Respuesta del servidor:", response);
      // Aquí puedes redirigir al usuario si es necesario
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg relative">
        <div className="absolute inset-0 rounded-lg bg-yellow-500 opacity-10 blur-md"></div>
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center relative z-10">
          INICIAR SESIÓN
        </h2>
        <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 rounded-md transition duration-300"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="mt-4 text-center relative z-10">
          <a href="/register" className="text-yellow-400 hover:underline">
            ¿No tienes cuenta? Regístrate aquí
          </a>
        </div>
      </div>
    </div>
  );
}


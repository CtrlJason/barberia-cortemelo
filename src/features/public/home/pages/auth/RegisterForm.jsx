import { useState } from "react";
import { register } from "../../../../../services/auth.service";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      const response = await register(userData);
      alert("Usuario registrado exitosamente");
      // Aquí puedes redirigir o limpiar el formulario
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } catch (error) {
      alert("Error al registrar usuario: " + (error.message || ""));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg relative w-full max-w-md">
        <div className="absolute inset-0 rounded-lg bg-yellow-500 opacity-10 blur-md"></div>
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center relative z-10">
          Registro de Usuario
        </h2>
        <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña (mínimo 6 caracteres)"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
            minLength={6}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none"
            minLength={6}
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 rounded-md transition duration-300"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

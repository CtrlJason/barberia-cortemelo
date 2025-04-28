import { useAuth } from "./auth/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">No has iniciado sesión</h2>
          <a href="/login" className="text-yellow-400 hover:underline">Iniciar sesión</a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Perfil de Usuario</h2>
        <div className="space-y-4 text-white">
          <div>
            <span className="font-semibold">Nombre:</span> {user.name}
          </div>
          <div>
            <span className="font-semibold">Correo:</span> {user.email}
          </div>
        </div>
        <button
          onClick={logout}
          className="mt-8 w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 rounded-md transition duration-300"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

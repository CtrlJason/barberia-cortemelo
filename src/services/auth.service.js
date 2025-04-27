const API_URL = "http://localhost:3000/auth"; // Cambia la URL según tu configuración

/**
 * Servicio para iniciar sesión.
 * @param {Object} credentials - Credenciales del usuario.
 * @param {string} credentials.email - Correo electrónico del usuario.
 * @param {string} credentials.password - Contraseña del usuario.
 * @returns {Promise<Object>} - Respuesta del servidor con el token y datos del usuario.
 */
export const login = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error("Credenciales inválidas");
        }

        const data = await response.json();
        return data; // Devuelve el token y los datos del usuario
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw error;
    }
};

/**
 * Servicio para registrar un nuevo usuario.
 * @param {Object} userData - Datos del usuario.
 * @param {string} userData.name - Nombre del usuario.
 * @param {string} userData.email - Correo electrónico del usuario.
 * @param {string} userData.password - Contraseña del usuario.
 * @returns {Promise<Object>} - Respuesta del servidor con el token y datos del usuario.
 */
export const register = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error("Error al registrar el usuario");
        }

        const data = await response.json();
        return data; // Devuelve el token y los datos del usuario
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        throw error;
    }
};
const API_URL = "http://localhost:3000/appointments";

/**
 * Servicio para reservar una cita.
 * @param {Object} appointmentData - Datos de la cita (date, time, sede, barber).
 * @param {string} token - Token JWT del usuario autenticado.
 * @returns {Promise<Object>} - Respuesta del servidor con la cita creada.
 */
export const reservarCita = async (appointmentData, token) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(appointmentData),
        });
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message || "Error al reservar la cita");
        }
        return await response.json();
    } catch (error) {
        console.error("Error al reservar cita:", error);
        throw error;
    }
};
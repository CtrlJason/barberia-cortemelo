import { useState } from "react";
import { reservarCita } from "@/services/reservas.service";
import { useAuth } from "./auth/AuthContext";

const SEDES = [
  "Sede Principal",
  "Sede Norte",
  "Sede Sur",
];

const BARBEROS = [
  "Kevin",
  "Juan",
  "Andrés",
  "Carlos",
];

export default function CreacionReservas() {
  const [form, setForm] = useState({
    date: "",
    time: "",
    sede: SEDES[0],
    barber: BARBEROS[0],
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value })); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      if (!user || !user.token) {
        setError("Debes iniciar sesión para reservar una cita.");
        setLoading(false);
        return;
      }
      await reservarCita(form, user.token);
      setSuccess("¡Cita reservada exitosamente!");
      setForm({ date: "", time: "", sede: SEDES[0], barber: BARBEROS[0] });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-amber-600 mb-6 text-center">
          Reserva tu cita
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-stone-700 mb-1">Fecha</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-stone-300 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-stone-700 mb-1">Hora</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-stone-300 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-stone-700 mb-1">Sede</label>
            <select
              name="sede"
              value={form.sede}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-stone-300 focus:outline-none"
              required
            >
              {SEDES.map((sede) => (
                <option key={sede} value={sede}>
                  {sede}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-stone-700 mb-1">Barbero</label>
            <select
              name="barber"
              value={form.barber}
              onChange={handleChange}
              className="w-full p-3 rounded-md border border-stone-300 focus:outline-none"
              required
            >
              {BARBEROS.map((barber) => (
                <option key={barber} value={barber}>
                  {barber}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-400 text-white font-bold py-3 rounded-md transition duration-300"
            disabled={loading}
          >
            {loading ? "Reservando..." : "Reservar Cita"}
          </button>
        </form>
        {success && <p className="mt-4 text-green-600 text-center">{success}</p>}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
}

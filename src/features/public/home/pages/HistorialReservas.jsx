import { useEffect, useState } from "react";

export default function HistorialReservas() {
  const [reservas, setReservas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservas = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("http://localhost:3000/appointments");
        if (!res.ok) throw new Error("Error al obtener el historial de reservas");
        const data = await res.json();
        setReservas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReservas();
  }, []);

  return (
    <div className="min-h-screen bg-stone-100 py-10 px-2 md:px-0">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-amber-600 mb-6 text-center">Historial de Reservas</h2>
        {loading && <p className="text-center text-stone-500">Cargando...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && reservas.length === 0 && (
          <p className="text-center text-stone-500">No hay reservas registradas.</p>
        )}
        {!loading && !error && reservas.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-stone-200">
              <thead className="bg-stone-800">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-amber-400 uppercase tracking-wider">Fecha</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-amber-400 uppercase tracking-wider">Hora</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-amber-400 uppercase tracking-wider">Sede</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-amber-400 uppercase tracking-wider">Barbero</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-amber-400 uppercase tracking-wider">ID Corte</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-amber-400 uppercase tracking-wider">Fecha de Registro</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-stone-200">
                {reservas.map((r) => (
                  <tr key={r.id}>
                    <td className="px-4 py-2 whitespace-nowrap">{r.date}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{r.time}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{r.sede}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{typeof r.barber === 'object' ? r.barber.nombre : r.barber}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{r.corteId ?? '-'}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{r.createdAt ? new Date(r.createdAt).toLocaleString() : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

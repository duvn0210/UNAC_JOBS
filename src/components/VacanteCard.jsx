export default function VacanteCard({ vacante }) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
      <div className="flex items-center mb-3">
        <span className="text-green-700 bg-green-100 px-3 py-1 rounded-full text-sm font-medium">
          Abierta
        </span>
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        {vacante.titulo}
      </h2>

      <p className="text-sm text-gray-600 mb-3">{vacante.descripcion}</p>

      <div className="flex flex-col text-sm text-gray-600 space-y-1">
        <p>🎓 {vacante.facultad}</p>
        <p>🗓️ Inicio: {new Date(vacante.fecha_inicio).toLocaleDateString()}</p>
        <p>📅 Cierre: {new Date(vacante.fecha_fin).toLocaleDateString()}</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="text-sm border rounded-md px-4 py-1 hover:bg-gray-100 transition">
          Ver detalles
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md px-4 py-1 transition">
          Postularme
        </button>
      </div>
    </div>
  );
}

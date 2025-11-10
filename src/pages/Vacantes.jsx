import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVacantes, createVacante } from "../redux/vacantesSlice";
import VacanteCard from "../components/VacanteCard";
import Lupa from "../assets/lupa.png";
import Swal from "sweetalert2";

export default function Vacantes() {
  const dispatch = useDispatch();
  const { vacantes, loading, error } = useSelector((state) => state.vacantes);
  const { user } = useSelector((state) => state.auth); // 👈 para saber el rol

  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    facultad: "",
    fecha_inicio: "",
    fecha_fin: "",
  });

  useEffect(() => {
    dispatch(getVacantes());
  }, [dispatch]);

  // 🔍 Filtro de vacantes
  const filteredVacantes = vacantes.filter((v) => {
    const term = searchTerm.toLowerCase();
    return (
      v.titulo?.toLowerCase().includes(term) ||
      v.descripcion?.toLowerCase().includes(term) ||
      v.facultad?.toLowerCase().includes(term)
    );
  });

  // 🧾 Manejo del formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Datos enviados:", formData);
      await dispatch(createVacante(formData)).unwrap();
      Swal.fire("Éxito", "Vacante creada correctamente", "success");
      setShowModal(false);
      setFormData({
        titulo: "",
        descripcion: "",
        facultad: "",
        fecha_inicio: "",
        fecha_fin: "",
      });
      dispatch(getVacantes());
    } catch {
      Swal.fire("Error", "No se pudo crear la vacante", "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Vacantes</h1>

      {/* 🔍 Buscador + Botón */}
      <div className="flex items-center justify-between mb-8">
        <div className="relative w-full max-w-md">
          <img
            src={Lupa}
            alt="Lupa"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          />
          <input
            type="text"
            placeholder="Buscar vacante por título, facultad o descripción..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
          />
        </div>

        {/* 👑 Botón solo para admin */}
        {user?.rol === "admin" && (
          <button
            onClick={() => setShowModal(true)}
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow transition"
          >
            Crear vacante
          </button>
        )}
      </div>

      {loading && <p>Cargando vacantes...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-6">
        {filteredVacantes.length > 0 ? (
          filteredVacantes.map((v) => <VacanteCard key={v.id} vacante={v} />)
        ) : (
          <p className="text-gray-500">No se encontraron vacantes.</p>
        )}
      </div>

      {/* 🪟 Modal crear vacante */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Crear nueva vacante</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="titulo"
                placeholder="Título"
                value={formData.titulo}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                required
              />
              <textarea
                name="descripcion"
                placeholder="Descripción"
                value={formData.descripcion}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                required
              />
              <input
                type="text"
                name="facultad"
                placeholder="Facultad"
                value={formData.facultad}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                required
              />
              <div className="flex gap-4">
                <input
                  type="date"
                  name="fecha_inicio"
                  value={formData.fecha_inicio}
                  onChange={handleChange}
                  className="w-1/2 border rounded-md px-3 py-2"
                  required
                />
                <input
                  type="date"
                  name="fecha_fin"
                  value={formData.fecha_fin}
                  onChange={handleChange}
                  className="w-1/2 border rounded-md px-3 py-2"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

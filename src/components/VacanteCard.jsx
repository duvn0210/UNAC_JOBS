import { useDispatch, useSelector } from "react-redux";
import { deleteVacante, updateVacante, getVacantes } from "../redux/vacantesSlice";
import { createPostulacion } from "../redux/postulacionesSlice";
import Swal from "sweetalert2";
import { useState } from "react";

export default function VacanteCard({ vacante }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showPostulados, setShowPostulados] = useState(false);
  const [postulados, setPostulados] = useState([]);

  const [editedData, setEditedData] = useState({
    titulo: vacante.titulo,
    descripcion: vacante.descripcion,
    facultad: vacante.facultad,
    fecha_inicio: vacante.fecha_inicio,
    fecha_fin: vacante.fecha_fin,
  });

  // 🧾 Datos del formulario de postulación
  const [postulacionData, setPostulacionData] = useState({
    nombreCompleto: "",
    tituloProfesional: "",
    experiencia: "",
    habilidades: "",
    telefono: "",
    correo: user?.email || "",
  });

  // 🗑️ Eliminar vacante
  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "¿Eliminar vacante?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      await dispatch(deleteVacante(vacante.id));
      dispatch(getVacantes());
      Swal.fire("Eliminada", "La vacante fue eliminada correctamente", "success");
    }
  };

  // ✏️ Guardar edición
  const handleSaveEdit = async () => {
    try {
      await dispatch(updateVacante({ id: vacante.id, updatedData: editedData })).unwrap();
      Swal.fire("Actualizada", "La vacante fue modificada correctamente", "success");
      setEditMode(false);
      dispatch(getVacantes());
    } catch {
      Swal.fire("Error", "No se pudo actualizar la vacante", "error");
    }
  };

  // 📩 Enviar postulación
  const handleSubmitPostulacion = async (e) => {
    e.preventDefault();
    try {
      const informacion = { ...postulacionData, correo: user?.email };

      await dispatch(
        createPostulacion({
          vacanteId: vacante.id,
          informacion,
        })
      ).unwrap();

      Swal.fire("Éxito", "Tu postulación fue enviada correctamente", "success");
      setShowForm(false);
      setPostulacionData({
        nombreCompleto: "",
        tituloProfesional: "",
        experiencia: "",
        habilidades: "",
        telefono: "",
        correo: user?.email || "",
      });
    } catch (error) {
      Swal.fire("Error", error || "No se pudo enviar la postulación", "error");
    }
  };

  // Ver postulados (solo admin)
  const handleVerPostulados = async () => {
    try {
      const res = await fetch(
        `http://localhost:5500/api/postulaciones/vacante/${vacante.id}`
      );
      const data = await res.json();

      if (!data.success) {
        Swal.fire("Sin resultados", data.message, "info");
        return;
      }

      setPostulados(data.data);
      setShowPostulados(true);
    } catch (error) {
      console.error("❌ Error al obtener postulados:", error);
      Swal.fire("Error", "No se pudieron cargar los postulados", "error");
    }
  };

  return (
    <div className="bg-[#fbfaf5] border border-yellow-200 rounded-xl p-4 shadow-sm">
      <div className="flex items-center mb-3">
        <span className="text-green-700 bg-green-100 px-3 py-1 rounded-full text-sm font-medium">
          Abierta
        </span>
      </div>

      {editMode ? (
        <div className="space-y-2">
          <input
            type="text"
            name="titulo"
            value={editedData.titulo}
            onChange={(e) => setEditedData({ ...editedData, titulo: e.target.value })}
            className="w-full border rounded-md px-3 py-1"
          />
          <textarea
            name="descripcion"
            value={editedData.descripcion}
            onChange={(e) => setEditedData({ ...editedData, descripcion: e.target.value })}
            className="w-full border rounded-md px-3 py-1"
          />
          <input
            type="text"
            name="facultad"
            value={editedData.facultad}
            onChange={(e) => setEditedData({ ...editedData, facultad: e.target.value })}
            className="w-full border rounded-md px-3 py-1"
          />
          <div className="flex gap-2">
            <input
              type="date"
              name="fecha_inicio"
              value={editedData.fecha_inicio}
              onChange={(e) => setEditedData({ ...editedData, fecha_inicio: e.target.value })}
              className="border rounded-md px-3 py-1 w-1/2"
            />
            <input
              type="date"
              name="fecha_fin"
              value={editedData.fecha_fin}
              onChange={(e) => setEditedData({ ...editedData, fecha_fin: e.target.value })}
              className="border rounded-md px-3 py-1 w-1/2"
            />
          </div>

          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={() => setEditMode(false)}
              className="px-3 py-1 border rounded-md hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              onClick={handleSaveEdit}
              className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Guardar
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">{vacante.titulo}</h2>
          <p className="text-sm text-gray-600 mb-3">{vacante.descripcion}</p>
          <div className="flex flex-col text-sm text-gray-600 space-y-1">
            <p>🎓 {vacante.facultad}</p>
            <p>🗓️ Inicio: {new Date(vacante.fecha_inicio).toLocaleDateString()}</p>
            <p>📅 Cierre: {new Date(vacante.fecha_fin).toLocaleDateString()}</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button className="text-sm border rounded-md px-16 py-2 hover:bg-gray-100 transition">
              Ver detalles
            </button>

            {user?.rol === "candidato" && (
              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md px-16 py-2 transition"
              >
                Postularme
              </button>
            )}

            {user?.rol === "admin" && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleVerPostulados()}
                  className="bg-green-600 hover:bg-green-700 text-white text-sm rounded-md px-4 py-2"
                >
                  Ver postulados
                </button>

                <button
                  onClick={() => setEditMode(true)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm rounded-md px-4 py-2"
                >
                  Editar
                </button>

                <button
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm rounded-md px-4 py-2"
                >
                  Eliminar
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* 🪟 Modal de postulación */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Formulario de Postulación</h2>
            <form onSubmit={handleSubmitPostulacion} className="space-y-3">
              <input
                type="text"
                name="nombreCompleto"
                placeholder="Nombre completo"
                value={postulacionData.nombreCompleto}
                onChange={(e) =>
                  setPostulacionData({ ...postulacionData, nombreCompleto: e.target.value })
                }
                required
                className="w-full border rounded-md px-3 py-2"
              />
              <input
                type="text"
                name="tituloProfesional"
                placeholder="Título profesional"
                value={postulacionData.tituloProfesional}
                onChange={(e) =>
                  setPostulacionData({ ...postulacionData, tituloProfesional: e.target.value })
                }
                required
                className="w-full border rounded-md px-3 py-2"
              />
              <input
                type="number"
                name="experiencia"
                placeholder="Años de experiencia"
                value={postulacionData.experiencia}
                onChange={(e) =>
                  setPostulacionData({ ...postulacionData, experiencia: e.target.value })
                }
                required
                className="w-full border rounded-md px-3 py-2"
              />
              <textarea
                name="habilidades"
                placeholder="Habilidades y competencias"
                value={postulacionData.habilidades}
                onChange={(e) =>
                  setPostulacionData({ ...postulacionData, habilidades: e.target.value })
                }
                required
                className="w-full border rounded-md px-3 py-2"
              />
              <input
                type="text"
                name="telefono"
                placeholder="Teléfono de contacto"
                value={postulacionData.telefono}
                onChange={(e) =>
                  setPostulacionData({ ...postulacionData, telefono: e.target.value })
                }
                required
                className="w-full border rounded-md px-3 py-2"
              />

              <input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                value={postulacionData.correo}
                readOnly
                className="w-full border rounded-md px-3 py-2 bg-gray-100 text-gray-500"
              />

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 👥 Modal para ver postulados */}
      {showPostulados && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-2xl shadow-lg overflow-y-auto max-h-[80vh]">
            <h2 className="text-xl font-bold mb-4">Postulados a esta vacante</h2>

            {postulados.length > 0 ? (
              <ul className="space-y-3">
                {postulados.map((p) => (
                  <li key={p.id} className="border rounded-lg p-3 bg-gray-50">
                    <p><strong>👤 Nombre:</strong> {p.nombreCompleto}</p>
                    <p><strong>🎓 Título:</strong> {p.tituloProfesional}</p>
                    <p><strong>📞 Teléfono:</strong> {p.telefono}</p>
                    <p><strong>📧 Correo:</strong> {p.correo}</p>
                    <p><strong>💼 Experiencia:</strong> {p.experiencia} años</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No hay postulados registrados.</p>
            )}

            <div className="flex justify-end mt-5">
              <button
                onClick={() => setShowPostulados(false)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

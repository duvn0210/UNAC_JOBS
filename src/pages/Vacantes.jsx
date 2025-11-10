import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVacantes } from "../redux/vacantesSlice";
import VacanteCard from "../components/VacanteCard";

export default function Vacantes() {
  const dispatch = useDispatch();
  const { vacantes, loading, error } = useSelector((state) => state.vacantes);

  useEffect(() => {
    dispatch(getVacantes());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Vacantes</h1>

      {loading && <p>Cargando vacantes...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-6">
        {vacantes.map((v) => (
          <VacanteCard key={v.id} vacante={v} />
        ))}
      </div>
    </div>
  );
}

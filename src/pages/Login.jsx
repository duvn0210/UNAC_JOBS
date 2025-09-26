import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Personas from "../assets/personas_Unacjobs.png";

export default function Login({ setIsLoggedIn } ) {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario:", usuario, "Contraseña:", contrasena);

    // Simulamos login exitoso
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div className="relative flex items-center justify-center bg-white overflow-hidden">
      <div className="w-full min-h-[697px] max-w-[700px] rounded-2xl pt-[130px]">
        {/* Tabs */}
        <div className="flex border-b mb-6 w-auto">
          <button className="w-1/2 py-2 text-center text-lg font-medium text-blue-900 border-b-2 border-[#1e3a8a] hover:border-blue-600"
          onClick={() => navigate("/register")}>
            Crear cuenta
          </button>
          <button className="w-1/2 py-2 text-center text-lg font-medium text-white bg-yellow-500 rounded-t-md">
            Iniciar sesión
          </button>
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-[500px] relative left-[120px]"
        >
          <div>
            <label className="block text-md font-medium text-gray-700">
              Usuario:
            </label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Docente"
              className="mt-1 w-full rounded-md border px-3 py-3 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div className="pb-5">
            <label className="block text-md font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              placeholder="Escriba su contraseña"
              className="mt-1 w-full rounded-md border px-3 py-3 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#1e3a8a] py-2 text-white font-semibold text-lg hover:bg-blue-800 transition"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>

      {/* Imagen en parte inferior izquierda */}
      <img
        src={Personas}
        alt="Personas UnacJobs"
        className="absolute top-[400px] left-[50px] w-[300px]"
      />
    </div>
  );
}

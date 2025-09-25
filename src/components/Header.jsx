import { useLocation, useNavigate } from "react-router-dom"; // Para saber en qué ruta estamos
import Logo from "../assets/Logo_Unacjobs.png";
import Perfil from "../assets/perfil.png";


export default function Header({ isLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === "/login";

  return (
    <header className="bg-[#1e3a8a] text-white p-4 shadow-md">
      <div className="max-w-7xl ml-24 flex items-center justify-between">
        {/* Logo + Título */}
        <div className="flex items-center space-x-4 ">
          <div className="w-[90px] flex items-center justify-center">
            <img src={Logo} alt="UnacJobs Logo" />
          </div>
          <div>
            <h1 className="text-3xl font-bold pb-2 pt-1">UnacJobs</h1>
            <p className="text-md text-gray-200 w-[250px]">
              Sistema de Contratación y Gestión Documental
            </p>
          </div>
        </div>

        {/* Botones de acción */}
        {!isLoginPage && (
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <button
                  className="text-white font-semibold text-lg px-4 py-2 rounded"
                  onClick={() => navigate("/login")}
                >
                  Iniciar Sesión
                </button>

                <button
                  className="bg-[#e39e2d] text-white font-semibold text-lg px-6 py-2 rounded-xl"
                  onClick={() => navigate("/register")}
                >
                  Registrarse
                </button>
              </>
            ) : (
              <>
                <button className="p-2">
                  <img
                          src={Perfil}
                          alt="Personas UnacJobs"
                          className="w-10 h-10"
                        />
                </button>
                <button className="p-2 flex flex-row">
                  <img
                          src={Perfil}
                          alt="Personas UnacJobs"
                          className="w-10 h-10"
                        />
                        <span className="pt-2 pl-2 text-md font-semibold">Jhon Doe</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import Logo from "../assets/Logo_Unacjobs.png";
import Perfil from "../assets/perfil.png";
import Notificacion from "../assets/notificacion.png";
import Logout from "../assets/logout.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const isLoginPage = location.pathname === "/login";

  // 🔹 Función para cerrar sesión
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token"); // limpia el token guardado
    navigate("/login"); // redirige al login
  };

  return (
    <header className="bg-[#1e3a8a] text-white lg:p-4 shadow-md">
      <div className="lg:max-w-7xl lg:ml-24 flex lg:items-center lg:justify-between">
        {/* Logo */}
        <div className="flex flex-row-reverse lg:flex-row items-center space-x-4">
          <button
            className="lg:w-[90px] w-20 lg:flex lg:items-center lg:justify-center"
            onClick={() => navigate("/")}
          >
            <div className="w-full relative">
              <div className="group mx-auto flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">
                <img
                  src={Logo}
                  alt="image"
                  className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
              </div>
            </div>
          </button>
          <div className="pr-10 lg:pr-0">
            <h1 className="lg:text-3xl text-xl font-bold lg:pb-2 pt-1">UnacJobs</h1>
            <p className="lg:text-md text-xs text-gray-200 lg:w-[250px] w-[240px]">
              Sistema de Contratación y Gestión Documental
            </p>
          </div>
        </div>

        {/* Botones */}
        {!isLoginPage && (
          <div className="lg:flex items-center space-x-4 hidden">
            {!isLoggedIn ? (
              <>
                <button
                  className="text-white font-semibold text-lg px-4 py-2 rounded"
                  onClick={() => navigate("/login")}
                >
                  <p className="text-lg m-6 group relative w-max">
                    <span>Iniciar Sesión</span>
                    <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#e39e2d] group-hover:w-full"></span>
                  </p>
                </button>

                <button
                  className="relative inline-flex items-center justify-start overflow-hidden font-medium transition-all rounded bg-[#e39e2d] group font-semibold text-lg px-6 py-2 rounded-xl"
                  onClick={() => navigate("/register")}
                >
                  <span className="w-56 h-48 rounded bg-[#A0804D] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left transition-colors duration-300 ease-in-out">
                    Registrarse
                  </span>
                </button>
              </>
            ) : (
              <>
                <button className="p-2">
                  <img
                    src={Notificacion}
                    alt="notificaciones UnacJobs"
                    className="w-10 h-10"
                  />
                </button>

                <button
                  className="p-2 flex flex-row"
                  onClick={() => navigate("/dashboard")}
                >
                  <img
                    src={Perfil}
                    alt="Perfil UnacJobs"
                    className="w-10 h-10"
                  />
                  <span className="pt-2 pl-2 text-md font-semibold">
                    {user?.nombre}
                  </span>
                </button>

                {/* 🔹 Nuevo botón de Logout */}
                <button
                  onClick={handleLogout}
                  className="p-2 flex flex-row"
                >
                    <img
                    src={Logout}
                    alt="Perfil UnacJobs"
                    className="w-10 h-10"
                  />
    
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

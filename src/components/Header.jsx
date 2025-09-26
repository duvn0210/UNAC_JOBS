import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo_Unacjobs.png";
import Perfil from "../assets/perfil.png";
import Notificacion from "../assets/notificacion.png";


export default function Header({ isLoggedIn }) {
    const location = useLocation();
    const navigate = useNavigate();

    const isLoginPage = location.pathname === "/login";

    return (
        <header className="bg-[#1e3a8a] text-white p-4 shadow-md">
            <div className="max-w-7xl ml-24 flex items-center justify-between">
                {/* Logo + Título */}
                <div className="flex items-center space-x-4 ">
                    <button className="w-[90px] flex items-center justify-center"
                        onClick={() => navigate("/")}
                    >
                        <div class="w-full relative ">
                            <div class=" group mx-auto flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">
                                <img src={Logo} alt="image" class="w-full h-auto relative z-0 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"></img>
                                <div class="absolute h-full w-full top-0 left-0"></div>
                            </div>
                        </div>
                    </button>
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
                                    <p class="text-lg m-6 group relative w-max">
                                        <span>Iniciar Sesión</span>
                                        <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#e39e2d] group-hover:w-full"></span>
                                    </p>
                                </button>

                                <button
                                    className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all rounded bg-[#e39e2d] group font-semibold text-lg px-6 py-2 rounded-xl"
                                    onClick={() => navigate("/register")}
                                >
                                    <span class="w-56 h-48 rounded bg-[#A0804D] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span class="relative w-full text-left transition-colors duration-300 ease-in-out">Registrarse</span>
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

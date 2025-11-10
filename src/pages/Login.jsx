import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../redux/authSlice";
import Personas from "../assets/personas_Unacjobs.png";
import { Eye, EyeOff } from "lucide-react"; 

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    rol: "candidato",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: formData.email, password: formData.password }))
      .unwrap()
      .then(() => navigate("/vacantes"))
      .catch(() => {});
  };

  // REGISTER
  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData))
      .unwrap()
      .catch(() => {});
  };

  return (
    <div className="relative flex items-center justify-center bg-white overflow-hidden">
      <div className="w-full min-h-[697px] max-w-[700px] rounded-2xl pt-[130px] transition-all duration-500">
        {/* Tabs con indicador slider */}
        <div className="flex border-b mb-6 w-auto relative">
          <div
            className={`absolute bottom-0 left-0 h-[44px] w-1/2 bg-yellow-500 rounded-t-md transition-transform duration-500 ease-in-out ${
              isRegister ? "translate-x-0" : "translate-x-full"
            }`}
          ></div>

          <button
            className={`w-1/2 py-2 text-center text-lg font-medium z-10 ${
              isRegister ? "text-white" : "text-blue-900"
            }`}
            onClick={() => setIsRegister(true)}
            type="button"
          >
            Crear cuenta
          </button>

          <button
            className={`w-1/2 py-2 text-center text-lg font-medium z-10 ${
              !isRegister ? "text-white" : "text-blue-900"
            }`}
            onClick={() => setIsRegister(false)}
            type="button"
          >
            Iniciar sesión
          </button>
        </div>

        {/* Contenedor de formularios */}
        <div className="relative w-[500px] left-[120px] min-h-[400px] overflow-hidden">
          {/* FORM LOGIN */}
          <form
            onSubmit={handleLogin}
            className={`absolute top-0 left-0 w-full transition-all duration-500 transform ${
              isRegister
                ? "-translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-md font-medium text-gray-700">
                  Usuario:
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  className="mt-1 w-full rounded-md border px-3 py-3 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="pb-5 relative">
                <label className="block text-md font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Escriba su contraseña"
                  className="mt-1 w-full rounded-md border px-3 py-3 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#1e3a8a] py-2 text-white font-semibold text-lg hover:bg-blue-800 transition"
              >
                {loading ? "Iniciando..." : "Iniciar Sesión"}
              </button>
            </div>
          </form>

          {/* FORM REGISTER */}
          <form
            onSubmit={handleRegister}
            className={`absolute top-0 left-0 w-full transition-all duration-500 transform ${
              isRegister
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-md font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-md font-medium text-gray-700">
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Tu apellido"
                    className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="correo@ejemplo.com"
                  className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200"
                />
              </div>

              {/* Password con botón 👁️ */}
              <div className="relative">
                <label className="block text-md font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Crea una contraseña"
                  className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <div>
                <label className="block text-md font-medium text-gray-700">
                  Rol
                </label>
                <input
                  type="text"
                  name="rol"
                  value="candidato"
                  disabled
                  className="mt-1 w-full rounded-md border px-3 py-2 shadow-sm bg-gray-100 text-gray-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#1e3a8a] py-2 text-white font-semibold text-lg hover:bg-blue-800 transition"
              >
                {loading ? "Registrando..." : "Crear Cuenta"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Imagen inferior izquierda */}
      <img
        src={Personas}
        alt="Personas UnacJobs"
        className="absolute top-[400px] left-[50px] w-[300px]"
      />
    </div>
  );
}

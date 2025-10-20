import { useNavigate } from "react-router-dom";
import registroImg from "../assets/registro.png";
import documentosImg from "../assets/documentos.png";
import validacionImg from "../assets/validacion.png";
import alertasImg from "../assets/alertas.png";
import panelImg from "../assets/panel.png";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col">

            {/* Hero */}
            <section className="text-center lg:mt-[100px] mt-[50px] px-6">
                <span className="bg-[#e39e2d] text-white lg:px-4 px-2 py-1 text-[15px] rounded-full font-semibold">
                    Sistema de Contratación Docentes Catedráticos
                </span>
                <h2 className="lg:text-4xl text-2xl font-bold text-[#1E3A8A] mt-4">
                    Bienvenido a UnacJobs
                </h2>
                <p className="text-[#1E3A8A] lg:w-[550px] mx-auto mt-2 font-semibold">
                    Somos una plataforma integral para la gestión documental y contratación de docentes universitarios.
                    Mantén procesos claros, ágiles y organizados en todo momento.
                </p>
            </section>

            {/* Funcionalidades */}
            <section className="mt-12 px-6">
                <h3 className="text-center lg:text-3xl text-xl font-bold text-[#1E3A8A] mb-8">
                    Funcionalidades Principales
                </h3>

                <div className="gap-6 max-w-[2000px] mx-auto">
                    <div className="flex lg:flex-row flex-col lg:justify-between">
                        {/* Registro */}
                        <div className="lg:w-[400px] lg:h-[180px] h-[130px] mb-6 lg:mb-0 bg-[#e9eaf4] p-6 lg:rounded-[45px] rounded-[30px] shadow hover:shadow-lg transition">
                            <div className="flex flex-row lg:pl-4">
                                <img src={registroImg} alt="Registro de Docentes" className="h-14 lg:mb-2 lg:pl-3 relative top-5 lg:top-0" />
                                <h4 className="lg:text-xl text-lg font-bold text-[#1E3A8A] lg:pt-4 pl-3">
                                    Registro de Docentes
                                </h4>
                            </div>

                            <p className="text-[#1E3A8A] text-left lg:text-md text-sm w-[300px] lg:pl-10 pl-[68px] mt-[-25px] lg:mt-0">
                                Gestión completa de docentes y sus periodos de contratación con información detallada.
                            </p>
                        </div>

                        {/* Documentos */}
                        <div className="lg:w-[400px] lg:h-[180px] h-[130px] mb-6 lg:mb-0 bg-[#fde8c7] p-6 lg:rounded-[45px] rounded-[30px] shadow hover:shadow-lg transition">
                            <div className="flex flex-row lg:pl-4">
                                <img src={documentosImg} alt="Documentos Dinámicos" className="h-14 lg:mb-2 lg:pl-3 relative top-5 lg:top-0" />
                                <h4 className="lg:text-xl text-lg font-bold text-[#1E3A8A] lg:pt-4 pl-3">
                                    Documentos Dinámicos
                                </h4>
                            </div>
                            <p className="text-[#1E3A8A] text-left lg:text-md text-sm w-[300px] lg:pl-10 pl-[68px] mt-[-25px] lg:mt-0">
                                Listado automático de documentos requeridos según tipo de contrato y vigencia.
                            </p>
                        </div>

                        {/* Validación */}
                        <div className="lg:w-[400px] lg:h-[180px] h-[130px] -mb-6 lg:mb-0 bg-[#e9eaf4] p-6 lg:rounded-[45px] rounded-[30px] shadow hover:shadow-lg transition">
                            <div className="flex flex-row lg:pl-4">
                                <img src={validacionImg} alt="Validación Automática" className="h-14 lg:mb-2 lg:pl-3 relative top-5 lg:top-0" />
                                <h4 className="lg:text-xl text-lg font-bold text-[#1E3A8A] lg:pt-4 pl-3">
                                    Validación Automática
                                </h4>
                            </div>

                            <p className="text-[#1E3A8A] text-left lg:text-md text-sm w-[300px] lg:pl-10 pl-[68px] mt-[-25px] lg:mt-0">
                                Sistema de carga y validación de documentos con retroalimentación inmediata.
                            </p>
                        </div>
                    </div>

                    <div className="flex lg:flex-row flex-col pt-12 justify-around">
                        {/* Alertas */}
                        <div className="lg:w-[400px] lg:h-[180px] h-[130px] mb-6 lg:mb-0 lg:bg-[#e9eaf4] bg-[#fde8c7] p-6 lg:rounded-[45px] rounded-[30px] shadow hover:shadow-lg transition">
                            <div className="flex flex-row lg:pl-4">
                                <img src={alertasImg} alt="Alertas Inteligentes" className="h-14 lg:mb-2 lg:pl-3 relative top-5 lg:top-0" />
                                <h4 className="lg:text-xl text-lg font-bold text-[#1E3A8A] lg:pt-4 pl-3">
                                    Alertas Inteligentes
                                </h4>
                            </div>

                            <p className="text-[#1E3A8A] text-left lg:text-md text-sm w-[300px] lg:pl-12 pl-[68px] mt-[-25px] lg:mt-0">
                                Notificaciones automáticas para documentos próximos a vencer.
                            </p>
                        </div>

                        {/* Panel */}
                        <div className="lg:w-[400px] lg:h-[180px] h-[130px] mb-6 lg:mb-0 lg:bg-[#fde8c7] bg-[#e9eaf4]  p-6 lg:rounded-[45px] rounded-[30px] shadow hover:shadow-lg transition">
                            <div className="flex flex-row lg:pl-4">
                                <img src={panelImg} alt="Panel Administrativo" className="h-14 lg:mb-2 lg:pl-3 relative top-5 lg:top-0" />
                                <h4 className="lg:text-xl text-lg font-bold text-[#1E3A8A] lg:pt-4 pl-3">
                                    Panel Administrativo
                                </h4>
                            </div>
                            <p className="text-[#1E3A8A] text-left lg:text-md text-sm w-[300px] lg:pl-12 pl-[68px] mt-[-25px] lg:mt-0">
                                Herramientas completas de seguimiento para el área administrativa.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden flex items-center justify-center">
                    <button className="bg-[#e99915] text-white font-semibold w-[190px] mb-6 rounded-3xl py-1"
                    onClick={() => navigate("/login")}
                    >
                    Comenzar
                </button>
                </div>
            </section>
        </div>
    );
}

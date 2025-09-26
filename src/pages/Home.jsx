import registroImg from "../assets/registro.png";
import documentosImg from "../assets/documentos.png";
import validacionImg from "../assets/validacion.png";
import alertasImg from "../assets/alertas.png";
import panelImg from "../assets/panel.png";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Hero */}
            <section className="text-center mt-[100px] px-6">
                <span className="bg-[#e39e2d] text-white px-4 py-1 rounded-full font-semibold">
                    Sistema de Contratación Docentes Catedráticos
                </span>
                <h2 className="text-4xl font-bold text-[#1E3A8A] mt-4">
                    Bienvenido a UnacJobs
                </h2>
                <p className="text-[#1E3A8A] w-[550px] mx-auto mt-2 font-semibold">
                    Plataforma integral para la gestión documental y contratación de docentes universitarios.
                    Mantén procesos claros, ágiles y organizados en todo momento.
                </p>
            </section>

            {/* Funcionalidades */}
            <section className="mt-12 px-6">
                <h3 className="text-center text-3xl font-bold text-[#1E3A8A] mb-8">
                    Funcionalidades Principales
                </h3>

                <div className="gap-6 max-w-[2000px] mx-auto">
                    <div className="flex flex-row justify-between">
                        {/* Registro */}
                        <div className="w-[400px] h-[180px] bg-[#e9eaf4] p-6 rounded-[45px] shadow hover:shadow-lg transition">
                            <div className="flex flex-row pl-4">
                                <img src={registroImg} alt="Registro de Docentes" className="h-14 mb-2 pl-3" />
                                <h4 className="text-xl font-bold text-[#1E3A8A] pt-4 pl-3">
                                    Registro de Docentes
                                </h4>
                            </div>

                            <p className="text-[#1E3A8A] text-left text-md w-[300px] pl-10">
                                Gestión completa de docentes y sus periodos de contratación con información detallada.
                            </p>
                        </div>

                        {/* Documentos */}
                        <div className="w-[400px] h-[180px] bg-[#fde8c7] p-6 rounded-[45px] shadow hover:shadow-lg transition">
                            <div className="flex flex-row pl-4">
                                <img src={documentosImg} alt="Documentos Dinámicos" className="h-14 mb-2 pl-3" />
                                <h4 className="text-lg font-bold text-[#1E3A8A] pt-4 pl-3">
                                    Documentos Dinámicos
                                </h4>
                            </div>
                            <p className="text-[#1E3A8A] text-left text-md w-[300px] pl-10">
                                Listado automático de documentos requeridos según tipo de contrato y vigencia.
                            </p>
                        </div>

                        {/* Validación */}
                        <div className="w-[400px] h-[180px] bg-[#e9eaf4] p-6 rounded-[45px] shadow hover:shadow-lg transition">
                            <div className="flex flex-row pl-4">
                                <img src={validacionImg} alt="Validación Automática" className="h-14 mb-2 pl-3" />
                                <h4 className="text-lg font-semibold text-[#1E3A8A] pt-4 pl-3">
                                    Validación Automática
                                </h4>
                            </div>

                            <p className="text-[#1E3A8A] text-left text-md w-[300px] pl-10">
                                Sistema de carga y validación de documentos con retroalimentación inmediata.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row pt-12 justify-around">
                        {/* Registro */}
                        <div className="w-[400px] h-[180px] bg-[#e9eaf4] p-6 rounded-[45px] shadow hover:shadow-lg transition">
                            <div className="flex flex-row pl-4">
                                <img src={alertasImg} alt="Alertas Inteligentes" className="h-14 mb-2 pl-3" />
                                <h4 className="text-xl font-bold text-[#1E3A8A] pt-4 pl-3">
                                    Alertas Inteligentes
                                </h4>
                            </div>

                            <p className="text-[#1E3A8A] text-left text-md w-[350px] pl-12">
                                Notificaciones automáticas para documentos próximos a vencer.
                            </p>
                        </div>

                        {/* Documentos */}
                        <div className="w-[400px] h-[180px] bg-[#fde8c7] p-6 rounded-[45px] shadow hover:shadow-lg transition">
                            <div className="flex flex-row pl-4">
                                <img src={panelImg} alt="Panel Administrativo" className="h-14 mb-2 pl-3" />
                                <h4 className="text-lg font-bold text-[#1E3A8A] pt-4 pl-3">
                                    Panel Administrativo
                                </h4>
                            </div>
                            <p className="text-[#1E3A8A] text-left text-md w-[350px] pl-12">
                                Herramientas completas de seguimiento para el área administrativa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

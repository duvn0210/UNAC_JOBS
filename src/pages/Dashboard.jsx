import { useState } from "react";
import Nube from "../assets/cargarDoc.png";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("documentos");

  // Mapeamos la posición del indicador del tab
  const tabIndex = activeTab === "documentos" ? 0 : activeTab === "alertas" ? 1 : 2;

  return (
    <div className="p-6 mx-auto">
      {/* Bienvenida */}
      <section className="mb-12 pl-20">
        <h2 className="text-3xl font-bold text-[#1E3A8A] mt-4">
          Bienvenida, Prof. María González
        </h2>
        <p className="text-[#1E3A8A] mt-4 text-md">
          Gestiona tus documentos y mantente al día con los requisitos institucionales.
        </p>
      </section>

      {/* Métricas */}
      <section className="flex flex-row mb-6 justify-between">
        <div className="border rounded-xl p-4 h-[160px] w-[280px]">
          <h3 className="text-left text-md text-[#1E3A8A] pt-4 pb-4">Documentos Completados</h3>
          <p className="text-2xl text-left font-bold text-[#1E3A8A] mt-2">1/4</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-[#1E3A8A] h-2 rounded-full w-1/4"></div>
          </div>
        </div>

        <div className="border rounded-xl p-4 w-[280px] h-[160px]">
          <h3 className="text-left text-md text-[#1E3A8A] pt-4 pb-4">Alertas Activas</h3>
          <p className="text-2xl text-left font-bold text-[#ac0d07] mt-2">2</p>
          <span className="text-sm text-left text-gray-500">Requieren atención</span>
        </div>

        <div className="border rounded-xl p-4 h-[160px] w-[280px]">
          <h3 className="text-left text-md text-[#1E3A8A] pt-4 pb-4">Contratos Activos</h3>
          <p className="text-2xl text-left font-bold text-[#07880b] mt-2">1</p>
          <span className="text-sm text-left text-gray-500">Cátedra 2025-1</span>
        </div>

        <div className="border rounded-xl p-4 w-[280px] h-[160px]">
          <h3 className="text-left text-md text-[#1E3A8A] pt-4 pb-4">Próximo Vencimiento</h3>
          <p className="text-2xl text-left font-bold text-[#be7807] mt-2">15</p>
          <span className="text-sm text-left text-gray-500">días restantes</span>
        </div>
      </section>

      {/* Tabs */}
      <section>
        <div className="flex justify-center mb-6">
          <div className="relative flex bg-[#eeeff7] rounded-full overflow-hidden w-full max-w-[1400px]">
            {/* Indicador animado */}
            <span
              className="absolute top-1 bottom-1 w-1/3 bg-white rounded-full shadow-md transition-transform duration-300"
              style={{ transform: `translateX(${tabIndex * 100}%)` }}
            ></span>

            {/* Botones */}
            <button
              onClick={() => setActiveTab("documentos")}
              className={`flex-1 py-1 text-lg font-medium relative z-10 ${activeTab === "documentos" ? "text-[#1E3A8A]" : "text-[#1E3A8A]"
                }`}
            >
              Documentos
            </button>
            <button
              onClick={() => setActiveTab("alertas")}
              className={`flex-1 py-1 text-lg font-medium relative z-10 ${activeTab === "alertas" ? "text-[#1E3A8A]" : "text-[#1E3A8A]"
                }`}
            >
              Alertas
            </button>
            <button
              onClick={() => setActiveTab("historial")}
              className={`flex-1 py-1 text-lg font-medium relative z-10 ${activeTab === "historial" ? "text-[#1E3A8A]" : "text-[#1E3A8A]"
                }`}
            >
              Historial
            </button>
          </div>
        </div>

        {/* Contenido dinámico */}
        {activeTab === "documentos" && (
          <div className="">
            {/* Seleccionar contrato */}
            <div className="border rounded-xl p-6 mb-6">
              <h4 className="text-lg font-bold text-[#1E3A8A] mb-2">
                Seleccionar Contrato
              </h4>
              <p className="text-lg text-[#1E3A8A] mb-4">
                Elige el tipo de contrato para ver los documentos requeridos
              </p>
              <div className="flex gap-4">
                <button className="bg-[#1E3A8A] text-white px-[30px] py-2 rounded-[15px]">
                  Cátedra <span className="bg-[#FBBF24] text-white px-6 rounded-xl ml-2">2024-1</span>
                </button>
                <button className="bg-white border border-[#1E3A8A] text-[#1E3A8A] px-4 py-2 rounded-[15px]">
                  Ocasional <span className="bg-[#1E3A8A] text-white px-6 rounded-xl ml-2">2024-1</span>
                </button>
              </div>
            </div>

            {/* Documentos requeridos */}
            <div className="border rounded-xl p-6 flex justify-between items-center">
              <div>
                <h4 className="text-lg font-bold text-[#1E3A8A] mb-2">
                  Documentos Requeridos
                </h4>
                <p className="text-lg text-[#1E3A8A]">
                  Estado actual de tus documentos para el contrato seleccionado
                </p>
              </div>
              <button className="flex flex-row items-center gap-2 bg-[#FBBF24] hover:bg-[#F59E0B] text-white px-4 py-2 rounded-lg font-semibold">
                <img src={Nube} alt="cargar imagen" className="h-6 w-6"/>
                Cargar Documentos
              </button>
            </div>
          </div>
        )}

        {activeTab === "alertas" && (
          <div className="border rounded-xl p-6">
            <h4 className="font-semibold text-[#1E3A8A] mb-2">Alertas</h4>
            <p className="text-gray-600 text-sm">
              Aquí aparecerán las alertas activas relacionadas con tus documentos y contratos.
            </p>
          </div>
        )}

        {activeTab === "historial" && (
          <div className="border rounded-xl p-6">
            <h4 className="font-semibold text-[#1E3A8A] mb-2">Historial</h4>
            <p className="text-gray-600 text-sm">
              Consulta aquí el historial de contratos y documentos cargados.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

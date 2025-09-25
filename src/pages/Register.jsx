export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-lg p-8">
        <h2 className="text-xl font-bold text-center text-blue-900 mb-6">
          Registro de Usuario
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Usuario"
            className="w-full rounded-md border px-3 py-2"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full rounded-md border px-3 py-2"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full rounded-md border px-3 py-2"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-yellow-500 py-2 text-white font-semibold hover:bg-yellow-600 transition"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
}

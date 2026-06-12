export default function Dashboard() {
  const user = {
    username: "Ardi",
    avatar:
      "https://cdn.discordapp.com/embed/avatars/0.png",
  };

  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 bg-zinc-900 text-white min-h-screen">
          <div className="p-5 text-xl font-bold">
            MDT Tentara
          </div>

          <nav className="space-y-2 p-3">
            <a href="/dashboard/duty" className="block p-3 rounded bg-zinc-800 hover:bg-zinc-700">
              📋 Laporan Duty
            </a>

            <a href="/dashboard/patroli" className="block p-3 rounded bg-zinc-800 hover:bg-zinc-700">
              🚔 Laporan Patroli
            </a>

            <a href="/dashboard/cuti" className="block p-3 rounded bg-zinc-800 hover:bg-zinc-700">
              📝 Izin Cuti
            </a>

            <a href="/dashboard/admin" className="block p-3 rounded bg-red-600 hover:bg-red-500">
              ⚙ Admin Panel
            </a>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1">

          {/* Navbar */}
          <div className="bg-white shadow p-4 flex justify-end">

            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src={user.avatar}
                alt=""
                className="w-10 h-10 rounded-full"
              />

              <span className="font-semibold">
                {user.username}
              </span>
            </div>

          </div>

          {/* Dashboard */}
          <div className="p-6">

            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <p className="text-zinc-500">
              Selamat datang di MDT Fraksi Tentara
            </p>

          </div>

        </main>

      </div>
    </div>
  );
}

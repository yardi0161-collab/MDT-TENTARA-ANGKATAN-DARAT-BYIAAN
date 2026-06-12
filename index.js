// components/Sidebar.js
import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: 'Dashboard', icon: '🏠', path: '/' },
    { name: 'Laporan Duty', icon: '📋', path: '/laporan-duty' },
    { name: 'Laporan Patroli', icon: '🚗', path: '/laporan-patroli' },
    { name: 'Gaji', icon: '💰', path: '/gaji' },
    { name: 'Cuti', icon: '🏖️', path: '/cuti' },
    { name: 'Pengaturan', icon: '⚙️', path: '/settings' },
  ];

  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-blue-600 to-blue-800 text-white transition-all duration-300 min-h-screen p-4`}>
      <button onClick={() => setIsOpen(!isOpen)} className="mb-4">
        {isOpen ? '◀' : '▶'}
      </button>
      
      {isOpen && <h1 className="text-xl font-bold mb-6">Laporan Duty</h1>}
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <a className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition">
              <span className="text-2xl">{item.icon}</span>
              {isOpen && <span>{item.name}</span>}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}

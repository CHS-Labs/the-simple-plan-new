import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Book, Heart, Info, Handshake } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/tracker', icon: Calendar, label: 'Tracker' },
    { path: '/book', icon: Book, label: 'Book' },
    { path: '/gratitude', icon: Heart, label: 'Gratitude' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/support', icon: Handshake, label: 'Support' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
      <div className="max-w-4xl mx-auto px-2">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex flex-col items-center py-2 px-3 transition-colors
                  focus:outline-none focus:ring-2 focus:ring-focus-ring rounded
                  ${
                    isActive
                      ? 'text-brand-orange'
                      : 'text-text-secondary hover:text-brand-orange'
                  }
                `}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

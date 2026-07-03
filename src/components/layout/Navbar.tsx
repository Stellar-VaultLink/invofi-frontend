'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Store,
  Briefcase,
  LogOut,
  Sun,
  Moon,
} from 'lucide-react';
import { useEffect } from 'react';

import { cn } from '@/lib/utils';
import { WalletButton } from '@/components/auth/WalletButton';
import { supabase } from '@/lib/supabase';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const NAV_LINKS = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/marketplace', label: 'Marketplace', icon: Store },
  { href: '/portfolio', label: 'Portfolio', icon: Briefcase },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>(
  'theme',
  'light'
);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 dark:bg-gray-900 dark:border-gray-800 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-blue-600">Invo</span>
          <span className="text-gray-900 dark:text-white">Fi</span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-1.5 px-3 py-2 rounded-md text-sm transition-colors',
                pathname.startsWith(link.href)
                  ? 'bg-blue-50 text-blue-700 dark:bg-gray-800 dark:text-blue-400 font-medium'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>

          <WalletButton />

          <button
            onClick={handleSignOut}
            className="hidden md:flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition-colors"
            title="Sign out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
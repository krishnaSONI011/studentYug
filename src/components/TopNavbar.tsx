'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function TopNavbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/home';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Hidden on home page */}
        {!isHomePage && (
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" width={120} height={60} alt="StudentYug Logo" className="object-contain" />
            </Link>
          </div>
        )}

        {/* Navigation Links - Hidden on home page, centered */}
        {!isHomePage && (
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
              About Us
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-green-600 transition-colors">
              Dashboard
            </Link>
            <Link href="/sports" className="text-gray-600 hover:text-green-600 transition-colors">
              Sports
            </Link>
            <Link href="/trees" className="text-gray-600 hover:text-green-600 transition-colors">
              Trees
            </Link>
          </div>
        )}

        {/* Spacer for home page to push auth buttons to right */}
        {isHomePage && <div className="flex-1"></div>}

        {/* Auth Buttons - Always visible and right-aligned */}
        <div className="flex items-center space-x-4 ml-auto">
          <Link 
            href="/login" 
            className="text-gray-600 hover:text-green-600 transition-colors font-medium"
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

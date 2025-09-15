import Link from 'next/link';
import { 
  
  MapPinIcon, 
  TrophyIcon,
  HeartIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              
              </div>
              <div>
                <h3 className="text-xl font-bold">StudentYug</h3>
                <p className="text-sm text-green-400">ONE STUDENT ONE TREE</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering students through sports guidance while nurturing environmental responsibility. 
              Every student progress contributes to a greener tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <GlobeAltIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <PhoneIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <EnvelopeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-green-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/sports" className="text-gray-300 hover:text-green-400 transition-colors">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="/trees" className="text-gray-300 hover:text-green-400 transition-colors">
                  Tree Tracker
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-300">
                <TrophyIcon className="w-4 h-4 text-green-400" />
                <span>Sports Guidance</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                
                <span>Tree Plantation</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <MapPinIcon className="w-4 h-4 text-green-400" />
                <span>Nearby Resources</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <HeartIcon className="w-4 h-4 text-green-400" />
                <span>Community Impact</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 StudentYug. All rights reserved. Made with ❤️ for students and environment.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

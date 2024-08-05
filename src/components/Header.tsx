import Image from 'next/image';
import Link from 'next/link';
import ProfileHero from './ProfileHero';

const Header = () => {
  return (
    <header className="mb-12 relative">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Antraxmin</h1>
        <div className="flex items-center space-x-4">
          <nav className="flex space-x-4">
            <Link href="/" className="hover:text-gray-300">
              Profile
            </Link>
            <Link href="/blog" className="hover:text-gray-300">
              Blog
            </Link>
          </nav>
        </div>
      </div>
      <ProfileHero />
    </header>
  );
};

export default Header;
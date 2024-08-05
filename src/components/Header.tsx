import Image from 'next/image';
import Link from 'next/link';

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
      <section>
        <div className="flex items-center mb-4">
          <Image src="/profile.png" alt="임채민" width={80} height={80} className="rounded-full mr-4" />
          <div>
            <h2 className="text-xl font-bold">임채민</h2>
            <p>Software Engineer</p>
          </div>
        </div>
        <p>E-mail: antraxmin@gmail.com</p>
        <div className="flex space-x-4 mt-2">
          <Link href="#" className="hover:text-gray-300">Github</Link>
          <Link href="#" className="hover:text-gray-300">LinkedIn</Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
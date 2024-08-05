import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="mb-12">
      <h1 className="text-2xl font-bold mb-8">Antraxmin</h1>
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
          <Link href="#">Blog</Link>
          <Link href="#">Github</Link>
          <Link href="#">LinkedIn</Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
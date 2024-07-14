import Link from 'next/link';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-4xl font-semibold">
          Walid<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/*mobile nav*/}
        <div className="xl:hidden"> 
          <MobileNav /> 
        </div>
      </div>
    </header>
  );
};

export default Header;

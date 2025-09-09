"use client";

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './logo';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex-1 flex justify-center md:justify-start">
            <Logo className="text-secondary-foreground" />
          </div>
          
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-primary hover:text-primary/80 transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-primary hover:text-primary/80 transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-primary hover:text-primary/80 transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
          </div>

          <nav className="flex-1 flex justify-center md:justify-end flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Mentions légales</Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {currentYear} Clair&Net. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

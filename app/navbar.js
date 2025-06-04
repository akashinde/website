"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isActive = (path) => pathname === path;
    
    const navigation = [
      { name: '/root', href: '/' },
      { name: '/projects', href: '/projects' },
      { name: '/certifications', href: '/certifications' },
      { name: '/contact', href: '/contact' },
    ]
  
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
  
    return (
      <nav className="border border-dotted">
        <div className="flex justify-center">
          {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  isActive(item.href) ? 'underline underline-offset-4' : 'text-gray-500 hover:underline hover:bg-black hover:text-white hover:underline-offset-4',
                  'px-3 py-2 text-sm font-bold',
                )}
              >
                {item.name}
              </Link>
          ))}
        </div>
      </nav>
    );
  };
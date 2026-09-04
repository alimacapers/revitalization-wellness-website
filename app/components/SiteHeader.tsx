'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/careers', label: 'Careers' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact Us' },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="top-header">
      <Link className="rwc-logo" href="/" aria-label="Revitalization Wellness Consultants home">
        <span className="rwc-symbol">RWC</span>
        <span className="rwc-name"><strong>Revitalization</strong><small>Wellness Consultants LLC</small><em>Restored • Renewed • Reconnected</em></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item, index) => (
          <span className="nav-item" key={item.href}>
            <Link className={pathname === item.href ? 'active' : ''} href={item.href}>{item.label}</Link>
            {index < navigation.length - 1 && <i>•</i>}
          </span>
        ))}
      </nav>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link className={pathname === item.href ? 'active' : ''} href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>
      </details>
      <div className="language" aria-label="Language: English"><span aria-hidden="true">🇺🇸</span><strong>EN</strong><b>⌃</b></div>
      <Link className="header-contact" href="/contact">
        <span className="contact-icon" aria-hidden="true">✆</span>
        <span><strong>Alexandria, Virginia</strong><small>Serving Northern Virginia</small></span>
      </Link>
    </header>
  );
}

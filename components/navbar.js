import Link from 'next/link';

export default function Navbar() {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Register', href: '/register' },
  ];

  return (
    <nav className="menu">
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

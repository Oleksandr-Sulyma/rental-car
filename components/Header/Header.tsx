"use client"; 

import css from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Link href="/" aria-label='Home'>
          <img src="/logo.svg" alt="Logo" width={104} height={16} />
        </Link>

        <nav aria-label="Main Navigation">
          <ul className={css.navigation}>
            <li className={css.navigationItem}>
              <Link 
                href="/" 
                className={`nav-link ${css.navigationLink} ${pathname === "/" ? "active" : ""}`}
              >
                Home
              </Link>
            </li>
            <li className={css.navigationItem}>
              <Link 
                href="/catalog" 
                className={`nav-link ${css.navigationLink} ${pathname === "/catalog" ? "active" : ""}`}
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
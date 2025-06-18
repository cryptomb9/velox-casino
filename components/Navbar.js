// components/Navbar.js
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src="/velox-logo.png" alt="Velox Logo" width={32} height={32} />
        <span className={styles.logoText}>Velox</span>
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/flip">Flip</Link>
        <Link href="/click">Click</Link>
      </div>
    </nav>
  );
};

export default Navbar;
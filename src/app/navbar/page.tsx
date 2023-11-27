import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <main className={styles.main}>
      <h1>Navbar </h1>
      <ul>
        <li>
          <Link href={"/home"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/service"}>Service</Link>
        </li>
      </ul>
    </main>
  );
}

import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/logo.png" width={67} height={81} alt="Логотип" />
      </Link>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/applications">Моя заявка</Link>
          </li>
          <li>
            <Link href="/events">Мероприятия</Link>
          </li>
          <li>
            <Link href="/invitations">Приглашения</Link>
          </li>
          <li>
            <Link href="/account">Аккаунт</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

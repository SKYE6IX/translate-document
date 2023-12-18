import Link from "next/link";
import "./navigation.scss";

const navLists = [
  { name: "Услуги и цены", href: "#" },
  { name: "Акции", href: "#" },
  { name: "О нас", href: "#" },
  { name: "Контакты", href: "#" },
];

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navLists.map((list, i) => {
          return (
            <Link href={list.href} key={i}>
              <li>{list.name}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

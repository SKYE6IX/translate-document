import { Link } from "react-scroll";
import "./navigation.scss";

const navLists = [
  { name: "Услуги и цены", href: "service" },
  { name: "Акции", href: "languages" },
  { name: "О нас", href: "about_us" },
  { name: "Контакты", href: "contact" },
];

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navLists.map((list, i) => {
          return (
            <li key={i}>
              <Link to={list.href} smooth={true} offset={50} spy={true}>
                {list.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

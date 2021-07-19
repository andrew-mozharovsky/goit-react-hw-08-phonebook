import { NavLink } from 'react-router-dom';
import { link, activeLink } from './Navigation.module.scss';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={link} activeClassName={activeLink}>
      Главная
    </NavLink>

    <NavLink to="/contacts" exact className={link} activeClassName={activeLink}>
      Контакты
    </NavLink>
  </nav>
);

export default Navigation;

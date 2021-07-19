import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

import { header } from './AppBar.module.scss';

const AppBar = ({ isAuthenticated }) => (
  <header className={header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);
export default AppBar;

import { Navigation } from '../types';
import { Navigator } from '../styles/navbarStyle';
import { Link } from './Link';

interface NavbarProps {
  navigationList: Navigation[];
}

export const Navbar = ({ navigationList }: NavbarProps) => {
  return (
    <Navigator>
      {navigationList.map(({ name, path }) => {
        return <Link key={path} path={path} activeClassName="active" message={name} />;
      })}
    </Navigator>
  );
};

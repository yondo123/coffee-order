import { NavLink } from 'react-router-dom';

interface LinkProps {
  activeClassName: string;
  path: string;
  message: string;
}

export const Link = ({ activeClassName, path, message }: LinkProps) => {
  return (
    <NavLink to={path} className={({ isActive }) => (isActive ? activeClassName : '')}>
      {message}
    </NavLink>
  );
};

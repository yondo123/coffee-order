import { useNavigate } from 'react-router-dom';

interface NavigateProps<T> {
  to: string;
  state?: T;
}

export const useRouterNavigate = <T,>({ to, state }: NavigateProps<T>) => {
  const navigate = useNavigate();
  const boundNavigate = () => {
    navigate(to, { state });
  };

  return boundNavigate;
};

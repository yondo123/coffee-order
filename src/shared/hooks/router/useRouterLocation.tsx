import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const useRouterLocation = (locateListener?: () => void) => {
  const params = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (locateListener) {
      locateListener();
    }
  }, [state, locateListener]);

  return state ?? Object.values(params)[0];
};

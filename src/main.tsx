import { Global } from '@emotion/react';
import { reactQueryClient } from './shared/config/reactQueryClient.ts';
import { QueryClientProvider } from 'react-query';
import resetStyle from './layout/styles/resetStyle.ts';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={reactQueryClient}>
    <Global styles={resetStyle} />
    <App />
  </QueryClientProvider>
);

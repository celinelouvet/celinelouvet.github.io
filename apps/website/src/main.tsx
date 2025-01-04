import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from '@/components/ui';

import '@/lib/dayjs/config';
import '@/lib/i18n';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
);

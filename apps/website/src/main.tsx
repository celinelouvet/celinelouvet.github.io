import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'src/components/ui';

import 'src/lib/config';

import 'src/theme/fonts.css';
import 'src/theme/print.css';

import App from './App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
);

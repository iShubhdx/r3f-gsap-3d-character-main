import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Inspector } from 'react-dev-inspector'
import App from './App.jsx';
import { CharacterAnimationsProvider } from './contexts/CharacterAnimations.jsx';
import '@mantine/core/styles.css';
import './App.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colors: {
          brand: ['#10b981', '#059669', '#047857', '#065f46', '#064e3b'],
        },
        defaultProps: {
          Button: {
            variant: 'filled',
            color: 'brand',
          },
        },
      }}
    >
      <CharacterAnimationsProvider>
        <App />
        <Inspector />
      </CharacterAnimationsProvider>
    </MantineProvider>
  </React.StrictMode>,
)


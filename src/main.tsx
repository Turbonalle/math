import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
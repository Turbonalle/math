import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ModePage from './pages/ModePage';
import GamePage from './pages/GamePage';
import Layout from './components/Layout';

const basename = import.meta.env.MODE === "production" ? "/react-mathpractice" : "/";

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mode/:operation" element={<ModePage />} />
          <Route path="/mode/:operation/:mode" element={<GamePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
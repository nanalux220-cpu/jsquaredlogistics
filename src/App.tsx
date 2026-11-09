import Home from './pages/home/page';
import NotFound from './pages/NotFound';

// Single-page site: the homepage, plus a friendly 404 for any other path.
export default function App() {
  const base = __BASE_PATH__.replace(/\/$/, '');
  const path = location.pathname.slice(base.length).replace(/\/+$/, '');
  return path === '' || path === '/index.html' ? <Home /> : <NotFound />;
}

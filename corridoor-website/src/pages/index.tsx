import HomePage from '../components/homepage/homePage';
import { useRouter } from 'next/router';
import Dashboard from './dashboard';
import Terms from './terms';
import Signup from './signup';
import FloatingMenu from '@/components/allPages/floatingMenu';

export default function Home() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="radial-gradient(at right top, rgb(88, 28, 135), rgb(192, 38, 211), rgb(157, 23, 77))">
      <FloatingMenu />
      {currentPath === '/' && <HomePage />}
      {currentPath === '/dashboard' && <Dashboard />}
      {currentPath === '/terms' && <Terms />}
      {currentPath === '/signup' && <Signup />}
    </div>
  );
}

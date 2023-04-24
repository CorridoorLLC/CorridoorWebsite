import HomePage from './mainscreen/homePage';
import { useRouter } from 'next/router';
import Dashboard from './dashboard';

export default function Home() {
  // Use the useRouter hook to access the router object
  const router = useRouter();

  // Get the current pathname from the router object
  const currentPath = router.pathname;

  return (
    <div className="radial-gradient(at right top, rgb(88, 28, 135), rgb(192, 38, 211), rgb(157, 23, 77))">
      {currentPath === '/' && <HomePage />}
      {currentPath === '/dashboard' && <Dashboard />}
    </div>
  );
}

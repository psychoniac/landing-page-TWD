import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Tableau des routes avec le chemin qui leur correspondent
    const routes = [
      { path: '/', label: 'Homepage'},
      { path: '/personnages', label: 'Personnages'},
      { path: '/histoire', label: 'Histoire'},
      { path: '/spin-off', label: 'Spin-off'},
      { path: '/contact', label: 'Contact'},
    ];

    return (
        <nav className='min-w-full mt-5 mb-5'>
            <ul className='flex justify-around'> 
              {routes
                // on vient filtrer les routes qui correspondent a la route actuelle
                .filter(route => route.path !== currentPath)
                .map(route => (
                  <li key={route.path}>
                    <Link to={route.path}>{route.label}</Link>
                  </li>
                ))
              }
            </ul>
        </nav>
    )
}

export default Navbar;
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='min-w-full mt-5 mb-5'>
            <ul className='flex justify-around'> 
              <li>
                <Link to='/'>Homepage</Link>
              </li> 
              <li>
                <Link to='/personnages'>Personnages</Link>
              </li>
              <li>
                <Link to='/histoire'>Histoire</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <Link to='/spin-off'>Spin-off</Link>
              </li>
            </ul>
        </nav>
    )
}

export default Navbar;
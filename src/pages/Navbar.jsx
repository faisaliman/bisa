import { Link } from 'react-router-dom';
import logo from '../assets/Black rose.png';

const Navbar = () => {
  return (
    <nav style={{
      padding: '10px',
      backgroundColor: '#ffffff',
      display: 'flex',
      alignItems: 'center' }}>
    <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '15px' }} />
    <Link to="/"style={{padding: '10px', textAlign: 'left' }}>Home</Link>
    <Link to="/posts">Posts</Link>
   
    </nav>
  );
}

export default Navbar;

import { Link } from 'react-router-dom';
import apple from "/assets/images/apple.svg"

function NavBar(){
  return(
    <header>
    <nav className='navigation'>
      <div className='iconHolder'>
      <img src={apple} alt="Apple logo"></img>
      </div>
      <div className='menu'>
        <div className='menuItem'><Link to="/">Home</Link></div>
        <div className='menuItem'><Link to="/contact">Contact</Link></div>
        <div className='menuItem'><Link to="/shop">Shop</Link></div>
        <div className='menuItem'><Link to="/about">About</Link></div>
      </div>
    </nav>
  </header>
  )
}
export default NavBar
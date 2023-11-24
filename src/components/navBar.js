import './navBar.css';
import logo from '../images/temp-logo.png';

function NavBar() {
    
    return (
      <div className="Nav-Main-Cont">
        <img className='logo' src={logo}/>
        <div className='nav-option'>Home</div>
        <div className='nav-option'>Dramas</div>
        <div className='nav-option'>Favourites</div>
        <div className='nav-option'>Stats</div>
        <div className='nav-option'>Activity</div>
      </div>
    );
}
  
export default NavBar;

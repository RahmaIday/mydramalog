import './App.css';
import NavBar from '../components/navBar';
import plus from '../images/plus.svg';

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <div className='LP-body'>
        <button className='log-btn'>
            <img className='log-plus' src={plus}></img>
            LOG
        </button>
        <div className='section-heading'>Recently Watched</div>
      </div>
    </div>
  );
}

export default App;
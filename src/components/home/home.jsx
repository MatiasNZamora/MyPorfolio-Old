import './home.css';
import img from '../../assets/mz-1.png';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>
        <img src={img} alt='' />
        <h2> Click Me ! </h2>
      </div>
    </div>
  );
}

export default Home;

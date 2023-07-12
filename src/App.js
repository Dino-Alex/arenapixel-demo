import tieude from './img/tieude.png';
import './App.css';
import background from './img/background.png'

function App() {
  return (
    <div class="bg-cover bg-no-repeat bg-[url('./img/background.png')]" >
      <img src={tieude} className='tieude' />

    </div>
  );
}

export default App;

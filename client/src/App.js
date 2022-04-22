
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Slider  from './UI Components/Slider/Slider';
import { style } from '@mui/system';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      
      <Footer/>
    </div>
  );
}

export default App;

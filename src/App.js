import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tabs from './pages/Tabs';

function App() {
  
  return (
   <>
  <div className='main'>
  <div>
       <Navbar></Navbar>
    </div>
    <Home/>
    <Tabs/>
  </div>
   </>
  );
}

export default App;

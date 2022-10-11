import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="app" data-testid="App">
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;

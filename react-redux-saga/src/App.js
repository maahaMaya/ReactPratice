import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import { Routes, Route } from 'react-router-dom'
import Cart from './component/Cart';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

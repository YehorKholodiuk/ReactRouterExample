import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
        <Link to={''}>To Home </Link>
        <Link to={'/about'}>About</Link>
        <hr/>
      <Routes>
        <Route path="/" element={'Home'} />
        <Route path="about" element={'About'} />
      </Routes>
    </div>
  );
}

export default App;

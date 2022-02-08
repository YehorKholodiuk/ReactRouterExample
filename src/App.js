import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import User from "./User";

function App() {
  return (
    <div>
        <Link to={''}>To Home </Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/user'}>User</Link>
        <Link to={'/user/123/ABC'}>User</Link>
        <Link to={'/user/334/ddf'}>User</Link>
        <hr/>
      <Routes>
        <Route path="/" element={'Home'} />
        <Route path="about" element={'About'} />
          <Route path="user" element={<User/>}/>
          <Route path="user/:userId/:lastName" element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;

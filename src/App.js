
import { Router, Routes } from 'react-router-dom';
import './App.css';
import MainComponent from './components/LandingPage';
import Header from './components/common/Header';
import Compare from './pages/Compare'; 
import Dashboard from './pages/Dashboard'; 
import { Route  } from "react-router-dom";
import Watchlist from './pages/Watchlist';
import Coin from  './pages/coin'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
                <Route path="/crypto-naman-dash" Component={MainComponent} ></Route>
                <Route path="/dashboard" Component={Dashboard}></Route>
                <Route path="/coin/:id" Component={Coin}></Route>
                <Route path="/watchlist" Component={Watchlist}></Route>
                <Route path="/compare" Component={Compare}></Route>
      </Routes>
    </div>
  );
}

export default App;

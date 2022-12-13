import Navbar from './components/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom';
import Login from './components/login'
import Dashboard from './Pages/Dashboard'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"  element={[<Navbar/>,<Home/>,<Footer/>]} />
        <Route path="/login"  element={[<Navbar/>,<Login/>,<Footer/>]} />
        <Route  path="dashboard/*" element={<Dashboard />} />
        <Route exact path="*" element={[<Navbar/>,<Home/>,<Footer/>]}/>
      </Routes>
      </div>
  );
}

export default App;

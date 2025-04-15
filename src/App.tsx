import { HashRouter as Router, Routes,Route } from 'react-router-dom';
//pages 
import Home from './pages/Home.tsx';
import SignUP from './pages/SignUP';
import Login from './pages/Login.tsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUP/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App
import { HashRouter as Router, Routes,Route } from 'react-router-dom';
//pages 
import Home from './pages/Home.tsx';
import SignUP from './pages/SignUP';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUP/>} />
      </Routes>
    </Router>
  )
}

export default App
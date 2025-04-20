import { HashRouter as Router, Routes,Route } from 'react-router-dom';
//pages 
import Home from './pages/Home.tsx';
import SignUP from './pages/SignUP';
import Login from './pages/Login.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
const App = () => {
  return (
    <GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`} >
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUP/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
    </GoogleOAuthProvider>
  )
}

export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Search from './pages/Search/Search'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

export default function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  )
}
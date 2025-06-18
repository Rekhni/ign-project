import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from "./pages/Home"
import Museum from './pages/Museum';
import Navbar from './components/Navbar';
import News from './pages/News';
import History from './pages/History';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Management from './pages/Management';
import InstituteStructure from './pages/InstituteStructure';
import ScientificAchievements from './pages/ScientificAchievements';
import Partners from './pages/Partners';
import Library from './pages/Library';
import Archive from './pages/Archive';
import ScientistDetail from './pages/ScientistDetail';
import Media from './pages/Media';
import Footer from './components/Footer';
import NewsDetail from './pages/newsDetail';
import LabDetail from './pages/LabDetail';
import ScientistsGallery from './pages/ScientistsGallery';
import Services from './pages/Services';

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('lang') || 'ru');
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language])

  return (
    <Router>
      <Navbar lang={language} onToggleLanguage={setLanguage}/>
      <Routes>
        <Route path="/" element={<Home lang={language}/>} />
        <Route path="/museum" element={<Museum lang={language}/>}/>
        <Route path='/news' element={<News lang={language}/>}/>
        <Route path='/history' element={<History lang={language}/>}/>
        <Route path='/management' element={<Management lang={language}/>}/>
        <Route path='/institute-structure' element={<InstituteStructure lang={language}/>}/>
        <Route path='/scientific-achievements' element={<ScientificAchievements lang={language}/>}/>
        <Route path='/partners' element={<Partners lang={language}/>}/>
        <Route path='/library' element={<Library lang={language}/>}/>
        <Route path='/archive' element={<Archive lang={language}/>}/>
        <Route path='/media' element={<Media lang={language}/>}/>
        <Route path='/scientists-gallery/:id' element={<ScientistDetail lang={language}/>}/>
        <Route path='/news/:id' element={<NewsDetail lang={language}/>}/>\
        <Route path='/laboratories/:id' element={<LabDetail lang={language}/>}/>
        <Route path='/scientists-gallery/' element={<ScientistsGallery lang={language}/>}/>
        <Route path='/services' element={<Services lang={language}/>}/>
      </Routes>
      <Footer lang={language}/>
    </Router>
  )
}

export default App

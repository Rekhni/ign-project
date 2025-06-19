import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
const Home = lazy(() => import("./pages/Home")) 
const Museum = lazy(() => import('./pages/Museum'));
const Navbar = lazy(() => import('./components/Navbar'));
const News = lazy(() => import('./pages/News'));
const History = lazy(() => import('./pages/History'));
const Management = lazy(() => import('./pages/Management'));
const InstituteStructure = lazy(() => import('./pages/InstituteStructure'));
const ScientificAchievements = lazy(() => import('./pages/ScientificAchievements'));
const Partners = lazy(() => import('./pages/Partners'));
const Library = lazy(() => import('./pages/Library'));
const Archive = lazy(() =>  import('./pages/Archive'));
const ScientistDetail = lazy(() => import('./pages/ScientistDetail'));
const Media = lazy(() => import('./pages/Media'));
const Footer = lazy(() => import('./components/Footer'));
const NewsDetail = lazy(() => import('./pages/newsDetail'));
const LabDetail = lazy(() => import('./pages/LabDetail'));
const ScientistsGallery = lazy(() => import('./pages/ScientistsGallery'));
const Services = lazy(() => import('./pages/Services'));
import { Spinner } from 'react-bootstrap';

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('lang') || 'ru');
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language])

  return (
    <Router>
      <Navbar lang={language} onToggleLanguage={setLanguage}/>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/ign-project/" element={<Home lang={language}/>} />
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
      </Suspense>
      <Footer lang={language}/>
    </Router>
  )
}

export default App

import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
//import { Header } from './components/layout/Header'
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer'

import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Courses } from './pages/Courses'
import { HomePage } from './pages/HomePage'
import { Platform } from './pages/Platform'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="courses" element={<Courses />} />
          <Route path="platform" element={<Platform />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;

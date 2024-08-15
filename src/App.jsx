import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import PersonnagesPage from './pages/PersonnagesPage';
import HistoirePage from './pages/HistoirePage';
import ContactPage from './pages/ContactPage';
import SpinOffPage from './pages/SpinOffPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
function App() {

  return (
    <div className='min-h-screen'>
      <Router>
        <Header />
        <Navbar />
        <div className='container mx-auto p-4'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/personnages' element={<PersonnagesPage />} />
            <Route path='/histoire' element={<HistoirePage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/spin-off' element={<SpinOffPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

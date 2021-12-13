import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import '@fontsource/roboto/400.css';

function App() {
  return (
    
      <div className="App">
        
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>

  );
}

export default App;

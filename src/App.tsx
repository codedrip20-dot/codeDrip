
import Home from './pages/Home'
import Projects from './pages/Projects';
import { Route, Routes } from 'react-router-dom';
import './App.css'

const App = () => {
  
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects' element={<Projects />} />
    </Routes>
    
    
  );
}
 

export default App

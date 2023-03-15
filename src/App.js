import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Project from './Components/Project';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Resume from './Components/Resume';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/resume' element={<Resume/>}/>

        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;

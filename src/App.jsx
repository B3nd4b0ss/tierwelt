import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Habitat from './pages/Habitat.jsx';
import Lifestyle from './pages/Lifestyle.jsx';
import Importance from './pages/Importance.jsx';
import Contact from './pages/Contact.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {/* Routes inside Layout */}
                    <Route index element={<Home/>}/>
                    <Route path="habitat" element={<Habitat/>}/>
                    <Route path="lifestyle" element={<Lifestyle/>}/>
                    <Route path="importance" element={<Importance/>}/>
                    <Route path="contact" element={<Contact/>}/>

                </Route>
            </Routes>
        </Router>
    );
}

export default App;

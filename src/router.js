import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import ErrorBoundary from './pages/ErrorBoundary';

function Router(){
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="/*" element={<ErrorBoundary />}/>
    </Routes>
}

export default Router

import './App.css';

import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './components/Home.js';
import Form from './components/Form.js';

// import Form from './components/Form'
// import { BrowserRouter, Routes ,Route } from 'react-router-dom';
function App() {
    return(
    <BrowserRouter>
    <Routes>    
        <Route index element={<Home/>}></Route>
     <Route path="/form" element={<Form/>}></Route>
    </Routes>
    </BrowserRouter>
    )
    
}

export default App;

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Bmi from './Components/BMI-Calculator/Bmi.js';
import News from './Components/News/News.js';
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/"
            element={
              <div>
              <Bmi/>
              </div>
            } />
            <Route path="/news"
            element={
              <div>
              <News/>
              </div>
            } />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;

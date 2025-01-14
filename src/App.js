import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Bmi from './Components/BMI-Calculator/Bmi.js';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

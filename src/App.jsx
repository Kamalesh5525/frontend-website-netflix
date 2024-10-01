import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LogginPage from "./pages/LogginPage";






function App() {


  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LogginPage />} />
      
      


    </Routes>



  );
}

export default App

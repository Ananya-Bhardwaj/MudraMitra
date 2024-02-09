import "./App.css";
import { CheckUserExist } from "./helper/helper";
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";
import Main from "./components/Main/Main";
import LandingPage from "./pages/Landing/LandingPage";
import Modules from "./Modules";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element = {<LandingPage/>} />
        {/* <Route path='/about' element = {<About/>} /> */}
        <Route
          path="/quiz-rules"
          element={
            <CheckUserExist>
              <Main />
            </CheckUserExist>
          }
        />
        <Route
          path="/quiz"
          element={
            <CheckUserExist>
              <Quiz />
            </CheckUserExist>
          }
        />
        <Route
          path="/result"
          element={
            <CheckUserExist>
              <Result />
            </CheckUserExist>
          }
        />
        {/* <Route path='*' element = {<ErrorPage/>} /> */}
        <Route path="/modules" element={<Modules />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

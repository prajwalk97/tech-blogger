import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSignUp from "./pages/SignInSignUp";
import Blog from "./pages/Blog";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInSignUp />} />
          <Route path="/blog:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

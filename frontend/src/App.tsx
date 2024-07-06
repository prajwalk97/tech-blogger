import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSignUp from "./pages/SignInSignUp";
import Blog from "./pages/Blog";
import { BlogsPage } from "./pages/BlogsPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInSignUp />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

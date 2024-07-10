import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSignUp from "./pages/SignInSignUp";
import Blog from "./pages/Blog";
import { BlogsPage } from "./pages/BlogsPage";
import { CreateBlog } from "./pages/CreateBlog";
import { Publish } from "./pages/Publish";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogsPage />} />
          <Route path="/signinsignup" element={<SignInSignUp />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

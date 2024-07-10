import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInSignUp from "./pages/SignInSignUp";
import Blog from "./pages/Blog";
import { BlogsPage } from "./pages/BlogsPage";
import { Publish } from "./pages/Publish";
import { ProtectedRouter } from "./store/ProtectedRouter";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlogsPage />} />
          <Route path="/signinsignup" element={<SignInSignUp />} />
          <Route path="/blog/:id" element={<ProtectedRouter><Blog /></ProtectedRouter>} />
          <Route path="/publish" element={<ProtectedRouter><Publish /></ProtectedRouter>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routePath } from "./routes/route";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePath.home} element={<Home />}></Route>
        <Route path={routePath.create} element={<CreatePost />} />
        <Route path={routePath.post} element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

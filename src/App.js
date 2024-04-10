import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Feature from "./pages/Feature";
import Page from "./pages/Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Home/>
      <Feature/>
      <Page/>
          {/* <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="Feature" element={<Feature/>}/>
            <Route path="Page" element={<Page/>}/>
          </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

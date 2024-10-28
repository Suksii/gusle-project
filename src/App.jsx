import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import GalleryPage from "./pages/GalleryPage";
import SongsPage from "./pages/SongsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FiddlePage from "./pages/FiddlePage";
import FiddlersPage from "./pages/FiddlersPage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-900 via-teal-600 to-teal-900">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<FiddlePage />} />
        <Route path="/pjesme" element={<SongsPage />} />
        <Route path="/galerija" element={<GalleryPage />} />
        <Route path="/guslari" element={<FiddlersPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

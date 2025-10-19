// @ts-nocheck
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages-app/HomePage";
import NosotrosPage from "./pages-app/NosotrosPage";
import { Navbar } from "./widgets/Navbar";

function App() {
  return (
    <Router>
      {/* El Navbar fuera de Routes para que se muestre en todas las páginas */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
      </Routes>
    </Router>
  );
}

export default App;






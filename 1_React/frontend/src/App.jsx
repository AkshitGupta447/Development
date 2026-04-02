import "./css/App.css";
import Favorites from "./pages/Favorite";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import NavBar from "./components/NavBar";

// Wrapping the entire app with MovieProvider to provide access to favorites state and functions to all components

// Routing via <Routes> container and <Route /> as mapping tool (has path and componetent to render)

function App() {
  return (
    <MovieProvider>  
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
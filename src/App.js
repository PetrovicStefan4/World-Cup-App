import "./App.css";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./pages/HomeScreen";
import MatchScreen from "./pages/MatchScreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/match/:id" element={<MatchScreen />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

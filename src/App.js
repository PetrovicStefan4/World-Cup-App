import "./App.css";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MatchesScreen from "./pages/MatchesScreen";
import MatchScreen from "./pages/MatchScreen";
import TeamsScreen from "./pages/TeamsScreen";
import TeamScreen from "./pages/TeamScreen";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MatchesScreen />}></Route>
        <Route path="/matches" element={<MatchesScreen />}></Route>
        <Route path="/match/:id" element={<MatchScreen />}></Route>
        <Route path="/teams" element={<TeamsScreen />}></Route>
        <Route path="/teams/:country" element={<TeamScreen />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

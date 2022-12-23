import "./App.css";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./pages/HomeScreen";
import MatchesScreen from "./pages/MatchesScreen";
import MatchScreen from "./pages/MatchScreen";
import TeamsScreen from "./pages/TeamsScreen";
import TeamScreen from "./pages/TeamScreen";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import NewsScreen from "./pages/NewsScreen";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/news" element={<NewsScreen />}></Route>
          <Route path="/matches" element={<MatchesScreen />}></Route>
          <Route path="/match/:id" element={<MatchScreen />}></Route>
          <Route path="/teams" element={<TeamsScreen />}></Route>
          <Route path="/teams/:country" element={<TeamScreen />}></Route>
        </Routes>
        <Footer />
        <ReactQueryDevtools initialIsOpen={true} position={"bottom-right"} />
      </Router>
    </QueryClientProvider>
  );
}

export default App;

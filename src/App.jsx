import "./App.css";
import "./colours.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// ui
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//pages
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";
import EventsByYear from "./pages/EventsByYear";
import Venues from "./pages/Venues";
import VenuesByYear from "./pages/VenuesByYear";
import Venue from "./pages/Venue";
import News from "./pages/News";
import NewsItem from "./pages/Newsitem";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/events/:id" element={<Event />}></Route>
          <Route path="/eventsyear" element={<EventsByYear />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/news/:id" element={<NewsItem />}></Route>
          <Route path="/venues" element={<Venues />}></Route>
          <Route path="/venuesyear" element={<VenuesByYear />}></Route>
          <Route path="/venues/:id" element={<Venue />}></Route>
        </Routes>

        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;

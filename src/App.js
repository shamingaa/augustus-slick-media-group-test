import "./App.css";
import Banner from "./components/Banner";
import SearchSection from "./components/SearchSection";
import TopNavBar from "./components/TopNavBar";

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Banner />
      <div className="movies-section">
        <SearchSection />
      </div>
    </div>
  );
}

export default App;

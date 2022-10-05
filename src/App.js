import "./App.css";

import Buttons from "./components/Buttons/Buttons";
import { Cards } from "./components/Cards/Cards";
import Dropdown from "./components/Dropdown/Dropdown";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <div className="App">
        <h1>Gokstad Bibliotek</h1>
        <SearchBar />
        <Buttons text="Click" />
        <Cards />
      </div>
    </>
  );
}

export default App;

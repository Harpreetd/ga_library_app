import "./App.css";

import Buttons from "./components/Buttons/Buttons";
import { Cards } from "./components/Cards/Cards";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  return (
    <>
      <div className="App">
        <h1>Gokstad Bibliotek</h1>

        <Buttons text="Click" />
        <Cards />
      </div>
    </>
  );
}

export default App;

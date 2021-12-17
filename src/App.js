import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./Components/Navbar.js";
import { Header } from "./Components/Header";
import { Items } from "./Components/Items";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Items />
    </div>
  );
}

export default App;

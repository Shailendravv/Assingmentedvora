import { Filters } from "./Components/Filters/Filter";
import { NavBar } from "./Components/Navbar/Navbar";
import { Rides } from "./Components/Rides/Rides";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Filters />
      <Rides />
      <div className="--container">
        <div className="footer">
          <span className="circle" />
        </div>
      </div>
    </div>
  );
}

export default App;

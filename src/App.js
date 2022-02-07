import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, DetailsPage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/shop" element={< />} /> */}
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;

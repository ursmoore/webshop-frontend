import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, DetailsPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        {/* <Route path="/shop" element={< />} /> */}
      </Routes>
    </div>
  );
}

export default App;

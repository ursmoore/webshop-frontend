import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/shop" element={< />} />
        <Route path="/shop/:id" element={< />} /> */}
      </Routes>
    </div>
  );
}

export default App;

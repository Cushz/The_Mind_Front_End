import Auth from "./Components/Auth/Auth";
import Cards from "./Components/About/Cards";
import WaitingRoom from "./Components/WaitingRoom/WaitingRoom";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/auth" element={<Auth />}></Route>
          <Route exact path="/about" element={<Cards />}></Route>
          <Route exact path="/about" element={<WaitingRoom />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

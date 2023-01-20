import Auth from "./Components/Auth/Auth";
import Cards from "./Components/About/Cards";
import ProfileUpdate from './Components/ProfileUpdate/ProfileUpdate'
import WaitingRoom from './Components/WaitingRoom/WaitingRoom';
import Lobby from './Components/Lobby/Lobby'
import Error from './Components/ErrorPage/Error'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameRoom from "./Components/GameRoom/GameRoom";
import CardDeck from "./Components/GameRoom/CardDeck";
import MainPage from "./Components/MainPage/MainPage";
import Navbar from "./Components/Navbar/Navbar";
import Navbar2 from "./Components/Navbar/Navbar2";
import LogOut from "./Components/Navbar/LogOut";
import VideoPopup from "./Components/MainPage/VideoPopup"


function App() {
  return (
    <Router>
      <Navbar2/>
      <div className="App">
        <Routes>
          <Route exact path="/auth" element={<Auth />}></Route>
          <Route exact path="/about" element={<Cards />}></Route>
          <Route exact path="/settings" element={<ProfileUpdate />}></Route>
          <Route exact path="/lobby" element={<Lobby />}></Route>
          <Route exact path="/waiting" element={<WaitingRoom />}></Route>
          <Route exact path="/gameroom" element={<GameRoom/>}></Route>
          <Route exact path="/404" element={<Error />}></Route>
          <Route exact path="/carddeck" element={<CardDeck />}></Route>
          <Route exact path="/mainpage" element={<MainPage/>}></Route>
          <Route exact path="/logout" element={<LogOut/>}></Route>
          <Route exact path="/video" element={<VideoPopup/>}></Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

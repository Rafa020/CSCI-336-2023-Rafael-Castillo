import "./App.css";
import Topnav from "./componets/topnav";
import Maincontent from "./componets/maincontent";
import Chuckjokes from "./componets/chuckjokes";
function App() {
  return (
    <>
      <div id="main-bg">
        <div class="splash-screen">
          <img src="./bg.png" alt="" />
        </div>
        <Topnav />
        <Maincontent />
        <Chuckjokes />
      </div>
    </>
  );
}

export default App;

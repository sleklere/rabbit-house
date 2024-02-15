import logo from "./assets/rabbit_logo.png";
import scribble1 from "./assets/2.png";
import scribble2 from "./assets/4.png";

function App() {
  return (
    <div className="working-for-you">
      <img src={scribble1} className="scribble-1" />
      <img src={scribble2} className="scribble-2" />
      <img src={logo} className="logo" />
      <h1>WORKING FOR YOU</h1>
    </div>
  );
}

export default App;

import logo from "./assets/rabbit_logo.png";
import scribble1 from "./assets/2.png";
import scribble2 from "./assets/4.png";
import fb from "./assets/fb_icon.png";
import ig from "./assets/ig_icon.png";

function App() {
  return (
    <div className="working-for-you">
      <img src={scribble1} className="scribble-1" />
      <img src={scribble2} className="scribble-2" />
      <img src={logo} className="logo" />
      <h1>WORKING FOR YOU</h1>
      <div className="icons">
        <a href="https://www.facebook.com/rabbithousemx" target="_blank">
          <img src={fb} className="icon-fb" />
        </a>
        <a
          href="https://www.instagram.com/rabbithousemx?igsh=MXVuN2twMmh3cTRubw=="
          target="_blank"
        >
          <img src={ig} className="icon-ig" />
        </a>
      </div>
    </div>
  );
}

export default App;

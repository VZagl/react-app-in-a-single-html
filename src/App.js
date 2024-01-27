import proj4 from "proj4";

import logo from "./public/logo.svg";
import "./App.css";

function App() {
  console.log("# App/render");

  const proj = new proj4.Proj("EPSG:3857");
  const xy = proj4.transform(proj4.WGS84, proj, proj4.toPoint([-180, 0]));
  console.log("xy =", xy);

  const coordIn = [-180, 0];
  const source = proj4.WGS84;
  const dest = new proj4.Proj("EPSG:3857");
  let point = proj4.toPoint(coordIn);
  const coordOut = proj4.transform(source, dest, point);
  /*
  const expect = {
    x: -20037508.342789244,
    y: -7.081154551613622e-10,
  };*/

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <p>cootd in = {JSON.stringify(coordIn)}</p>
          <p>cootd out = {JSON.stringify(coordOut)}</p>
        </div>
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="White Rock" />
        <footer>
          This project was coded by Roberta Obilie and is open-sourced on{" "}
          <a
            href="https://github.com/robilie/react-weather-search-homework.git"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://vigorous-ramanujan-ccbdc5.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

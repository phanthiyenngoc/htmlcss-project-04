import "./App.css";
import LayoutDefault from "./layout";
import "./assets/style/reset.css";
import "./assets/style/common.css";
import Home from "./page/Home";

function App() {
  return (
    <div className="app">
      <LayoutDefault>
        <Home />
      </LayoutDefault>
    </div>
  );
}

export default App;

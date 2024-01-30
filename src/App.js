import "./App.css";
import Game from "./pages/Game";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Game />
      </div>
    </Provider>
  );
}

export default App;

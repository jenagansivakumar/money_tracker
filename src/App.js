import "./App.css";
import { Header } from "./components/header";
import { Balance } from "./components/balance";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;

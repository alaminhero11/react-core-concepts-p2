import "./App.css";
import Buttons from "./Button";
import Counter from "./counter";
import Team from "./Team";
import Friends from "./Friends";

function App() {
  // -----Return-----
  return (
    <>
      <h2>React Core Concepts Part-02:</h2>
      <Friends></Friends>
      <Team></Team>
      <Counter></Counter>
      <Buttons></Buttons>
    </>
  );
}

export default App;
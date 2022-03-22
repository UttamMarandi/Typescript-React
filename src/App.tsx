import "./App.css";
import Greet from "./Components/Greet";
import Person from "./Components/Person";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  return (
    <div className="App">
      <Greet name="Uttam" messageCount={12} isLoggedIn={false} />
      <Person name={personName} />
    </div>
  );
}

export default App;

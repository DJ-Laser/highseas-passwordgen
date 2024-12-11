import map from "./assets/map-parchment.svg";
import { PasswordGenerator } from "./components/PasswordGenerator";

function App() {
  return (
    <div
      className="p-10 bg-cover"
      style={{
        backgroundImage: `url('${map}')`,
      }}
    >
      <h1 className="my-8 font-bold text-parchment-ink-dark text-5xl">
        Password Generator
      </h1>
      <PasswordGenerator />
    </div>
  );
}

export default App;

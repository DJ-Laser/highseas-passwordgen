import map from "./assets/map-parchment.svg";
import { PasswordGenerator } from "./components/PasswordGenerator";

function App() {
  return (
    <div
      className="p-10 bg-[size:100%_100%]"
      style={{
        backgroundImage: `url('${map}')`,
      }}
    >
      <h1 className="mt-6 mb-10 font-bold text-parchment-ink-dark text-5xl">
        Password Generator
      </h1>
      <PasswordGenerator />
    </div>
  );
}

export default App;

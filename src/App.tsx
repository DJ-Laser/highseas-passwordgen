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
      <h1 className="mt-2 mb-2 font-bold text-parchment-ink-dark text-5xl">
        Davy Jones Locker
      </h1>
      <h2 className="mb-4">
        Protect your booty while sailing the digital seas
      </h2>
      <PasswordGenerator />
    </div>
  );
}

export default App;

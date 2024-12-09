import { CharSelector } from "./components/CharSelector";

function App() {
  return (
    <>
      <h1 className="my-8 font-bold text-5xl leading-5">Password Generator</h1>
      <CharSelector
        onCharsChanged={(chars) => {
          console.log(chars);
        }}
      />
    </>
  );
}

export default App;

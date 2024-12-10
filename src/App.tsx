import { CharSelector } from "./components/CharSelector";
import { PasswordDisplay } from "./components/PasswordDisplay";

function App() {
  return (
    <>
      <h1 className="my-8 font-bold text-5xl">Password Generator</h1>
      <PasswordDisplay
        password="paubcyiusjncfopusbpiuwsedfrgthyjnbgvfcdsfrgthyjmnhbvcdfrgthyjukmnhbvcf"
        onRegenerate={() => {}}
      />
      <CharSelector
        onCharsChanged={(chars) => {
          console.log(chars);
        }}
      />
    </>
  );
}

export default App;

import {useLiveQuery} from "dexie-react-hooks";
import {db} from "./db";
import {useState} from "react";

new Worker(new URL('./worker.js', import.meta.url));

function App() {
  const client = useLiveQuery(() => db.bank.get({ name: 'Igor' }))

  const [manuallyCheckedBalance, setBalance] = useState(0);
  const checkBalance = () => db.bank.get({ name: 'Igor' })
      .then(({ balance }) => setBalance(balance));

  return (
    <div className="App">
      <h1>Bank account</h1>
      <p>Name: {client?.name}</p>
      <p>Balance: {client?.balance}</p>

      <h3>Check manually:</h3>
      <p>Balance: {manuallyCheckedBalance}</p>
      <button onClick={checkBalance}>check</button>
    </div>
  );
}

export default App;

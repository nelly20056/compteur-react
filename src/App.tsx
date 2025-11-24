import { useState } from "react";

function App() {
  // Déclaration d'un "state" (état)
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>ton cul 🎉</h1>
      <h2>Compteur : {count}</h2>

      <button 
        onClick={() => setCount(count + 1)}
        className="btn btn-primary"
      >
        Ajouter +1
      </button>

      <br /><br />

      <button 
        onClick={() => setCount(0)}
        className="btn btn-accent"
      >
        Réinitialiser
      </button>
    </div>
  );
}

export default App;

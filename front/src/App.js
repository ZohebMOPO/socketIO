import React, { useState } from "react";
import Component from "./component/Component";

function App() {
  const [loadClient, setLoadClient] = useState(true);
  return (
    <div>
      <button onClick={() => setLoadClient((prevState) => !prevState)}>
        STOP CLIENT
      </button>
      {loadClient ? <Component /> : null}
    </div>
  );
}

export default App;

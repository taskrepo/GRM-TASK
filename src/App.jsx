import React, { useState } from "react";
import Compare from "./components/Compare";

function App() {
  const [comparisonDone, setComparisonDone] = useState(false);

  return (
    <div>
      <Compare
        comparisonDone={comparisonDone}
        setComparisonDone={setComparisonDone}
      />
    </div>
  );
}
export default App;

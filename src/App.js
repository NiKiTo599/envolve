import { useCallback, useEffect, useState } from "react";
import { Features } from "./components/Features";
import { Header } from "./components/Header";

import "./index.scss";

function App() {
  const [width, setWidth] = useState(window.screen.width);

  const resize = useCallback(() => setWidth(window.screen.width), []);

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Features width={width} />
      </main>
    </div>
  );
}

export default App;

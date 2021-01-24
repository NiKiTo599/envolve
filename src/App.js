import { useCallback, useEffect, useState } from "react";
import { About } from "./components/About";
import { Advanteges } from "./components/Advantages/Advantages";
import { Categories } from "./components/Categories";
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
      <Header width={width} />
      <main className="main">
        <About />
        <Categories width={width} />
        {/* <Advanteges /> */}
        <Features width={width} />
      </main>
    </div>
  );
}

export default App;

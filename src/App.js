import { useCallback, useEffect, useState } from "react";

import { About } from "./components/About";
import { Advantages } from "./components/Advantages/Advantages";
import { Categories } from "./components/Categories";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";

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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <Header width={width} />
      <main className="main">
        <About width={width} />
        <Categories width={width} />
        <Advantages />
        <Features width={width} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

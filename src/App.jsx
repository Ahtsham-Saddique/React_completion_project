import About from "./pages/About";
import ScrollProgress from "./Components/ScrollProgress/ScrollProgress";
import CustomCursor from "./Components/CustomCursor/CustomCursor";

function App() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true"></div>
      <ScrollProgress />
      <CustomCursor />
      <About />
    </>
  );
}

export default App;


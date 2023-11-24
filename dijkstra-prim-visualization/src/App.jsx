import Canvas from "./components/Canvas/Canvas";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import Instructions from "./components/Instructions/Instructions";
import { GraphParamsProvider } from "./contexts/GraphParamsContext";
import { ErrorModalProvider } from "./contexts/ModalsContext";
import { DragModeProvider } from "./contexts/DragContext";

function App() {
  return (
    <ErrorModalProvider>
      <GraphParamsProvider>
        <DragModeProvider>
          <Navbar />
          <Canvas />
          <Title />
          <Instructions />
        </DragModeProvider>
      </GraphParamsProvider>
    </ErrorModalProvider>
  );
}

export default App;

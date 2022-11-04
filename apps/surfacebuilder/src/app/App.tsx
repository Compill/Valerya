// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './App.module.css';
import { Content } from "./Content";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";



export function App() {
  return (
    <div dflex flexRow w="full" h="screen">
      <LeftPanel />
      <Content flexGrow="1" />
      {/* <RightPanel /> */}
    </div>
  );
}

export default App;

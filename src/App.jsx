import MobileView from "./components/mobile/MobileView";
import VsPage from "./pages/VsPage";

function App() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return <div>{isMobile ? <MobileView /> : <VsPage />}</div>;
}

export default App;

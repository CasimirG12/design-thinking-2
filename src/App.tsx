import BottomBar from "./components/BottomBar";
import DocNavigationPanel from "./components/DocNavigationPanel";
import DocViewer from "./components/DocViewer";
import NavBar from "./components/NavBar";
import { useDocContext } from "./context/docContext";
import { SectionRefsProvider } from "./context/sectionRefsContext";

const App = () => {
  const { docs } = useDocContext();
  const activeDoc = docs[0];
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="w-screen h-[97vh] flex flex-row bg-zinc-800 text-white">
        <NavBar />
        <SectionRefsProvider>
          <DocNavigationPanel documentation={activeDoc} />
          <DocViewer />
        </SectionRefsProvider>
      </div>
      <BottomBar />
    </div>
  );
};

export default App;

import "./App.css";
import AppBar from "./components/AppBar";
import ActionPlan from "./components/ActionPlan";

function App() {
  return (
    <main>
      <AppBar />

      <div className="flex flex-col px-4 py-6 space-y-16 xl:px-40 lg:flex-row lg:px-20 lg:py-12 lg:space-x-24 lg:space-y-0">
        <div className="flex flex-1">
          <ActionPlan userName="Jane Doe" />
        </div>

        <div className="flex flex-col flex-1 space-y-16"></div>
      </div>
    </main>
  );
}

export default App;

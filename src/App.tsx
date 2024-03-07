import "./App.css";
import AppBar from "./components/AppBar";
import ActionPlan from "./components/ActionPlan";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <main>
      <AppBar />

      <div className="flex flex-col px-4 py-6 space-y-16 xl:px-40 lg:flex-row lg:px-20 lg:py-12 lg:space-x-24 lg:space-y-0">
        <ActionPlan userName="Jane Doe" />
      </div>
    </main>
  );
}

export default App;

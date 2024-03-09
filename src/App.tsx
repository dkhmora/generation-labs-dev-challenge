import "./App.css";
import AppBar from "./components/AppBar";
import ActionPlan from "./components/ActionPlan";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import { actionPlanMockData, actionPlanColumns } from "./constants";
import { ActionPlanDataContext } from "./components/ActionPlanDataContext";

// This is a mock data provider for the action plan data
const ActionPlanDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = React.useState(actionPlanMockData);

  return (
    <ActionPlanDataContext.Provider
      value={{ data, columns: actionPlanColumns, setData }}
    >
      {children}
    </ActionPlanDataContext.Provider>
  );
};

function App() {
  return (
    <main>
      <AppBar />

      <div className="flex flex-col px-4 py-6 space-y-16 xl:px-40 lg:flex-row lg:px-20 lg:py-12 lg:space-x-24 lg:space-y-0">
        <ActionPlanDataProvider>
          <ActionPlan userName="Jane Doe" />
        </ActionPlanDataProvider>
      </div>
    </main>
  );
}

export default App;

import "./App.css";
import AppBar from "./components/AppBar";
import ActionPlan from "./components/ActionPlan";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import { actionPlanMockData, actionPlanColumns } from "./constants";
import {
  ActionPlanDataContext,
  NotesData,
} from "./components/ActionPlanDataContext";

// This is a mock data provider for the action plan data
const ActionPlanDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = React.useState(actionPlanMockData);
  const [isNotesModalOpen, setIsNotesModalOpen] = React.useState(false);
  const [notesData, setNotesData] = React.useState<NotesData>({
    notesText: "",
    rowIndex: 0,
    dataKey: "",
  });

  return (
    <ActionPlanDataContext.Provider
      value={{
        data,
        columns: actionPlanColumns,
        setData,
        notesData,
        setNotesData,
        isNotesModalOpen,
        setIsNotesModalOpen,
        saveNotes: () => {
          const { rowIndex, dataKey, notesText } = notesData;
          setData((prevData: any) => {
            const prevSectionData = prevData[dataKey];
            prevSectionData[rowIndex].notes = notesText;

            return {
              ...prevData,
              [dataKey]: prevSectionData,
            };
          });
          setNotesData({
            notesText: "",
            rowIndex: 0,
            dataKey: "",
          });
          setIsNotesModalOpen(false);
        },
      }}
    >
      {children}
    </ActionPlanDataContext.Provider>
  );
};

function App() {
  return (
    <main>
      <AppBar />

      <div className="flex flex-col px-4 py-6 space-y-16 xl:px-40 lg:px-20 lg:py-3 lg:space-x-24 lg:space-y-0">
        <ActionPlanDataProvider>
          <ActionPlan userName="Jane Doe" />
        </ActionPlanDataProvider>
      </div>
    </main>
  );
}

export default App;

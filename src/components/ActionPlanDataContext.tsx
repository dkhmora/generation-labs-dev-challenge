import React from "react";
import { actionPlanMockData, actionPlanColumns } from "../constants";
import { ActionPlanData } from "../types";
// Define a type for your notes data
export interface NotesData {
  notesText: string;
  rowIndex: number;
  dataKey: string;
}

// Define a type for the context value
interface ActionPlanDataContextType {
  data: ActionPlanData; // Consider defining a more specific type
  columns: typeof actionPlanColumns; // Assuming this has a specific structure you can reference
  setData: (data: any) => void; // Use a more specific type instead of any if possible
  notesData: NotesData;
  setNotesData: (data: any) => void;
  isNotesModalOpen: boolean;
  setIsNotesModalOpen: (isOpen: boolean) => void;
  saveNotes: () => void;
}

const actionPlanDataContextInitialState: ActionPlanDataContextType = {
  data: actionPlanMockData, // Make sure this matches the expected type
  columns: actionPlanColumns,
  setData: () => {}, // Provide noop function as placeholder
  notesData: {
    notesText: "",
    rowIndex: 0,
    dataKey: "",
  },
  setNotesData: () => {},
  isNotesModalOpen: false,
  setIsNotesModalOpen: () => {},
  saveNotes: () => {},
};

export const ActionPlanDataContext =
  React.createContext<ActionPlanDataContextType>(
    actionPlanDataContextInitialState
  );

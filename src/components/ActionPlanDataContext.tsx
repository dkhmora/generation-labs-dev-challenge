import React from "react";
import { actionPlanMockData, actionPlanColumns } from "../constants";

export const ActionPlanDataContext = React.createContext({
  data: actionPlanMockData,
  columns: actionPlanColumns,
  setData: (data: any) => {},
});

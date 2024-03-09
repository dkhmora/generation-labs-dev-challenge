import React from "react";
import { actionPlanMockData, columns } from "../constants/mockData";

export const ActionPlanDataContext = React.createContext({
  data: actionPlanMockData,
  columns,
  setData: (data: any) => {},
});

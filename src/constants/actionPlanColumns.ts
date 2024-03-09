import { selectItems } from ".";
import { Columns } from "../types";

export const actionPlanColumns: Columns = {
  system: {
    fieldType: "select",
    label: "System",
    items: selectItems.system,
    width: "20%",
  },
  intervention: {
    fieldType: "select",
    fieldProps: {
      search: true,
    },
    label: "Intervention",
    items: selectItems.intervention,
    width: "20%",
  },
  dosage: {
    fieldType: "text",
    label: "Dosage",
    width: "20%",
  },
  frequency: {
    fieldType: "select",
    label: "Frequency",
    items: selectItems.frequency,
    width: "20%",
  },
  notes: {
    fieldType: "button/notes",
    label: "Notes",
    width: "10%",
  },
  delete: {
    fieldType: "button/delete",
    label: "",
    width: "10%",
  },
};

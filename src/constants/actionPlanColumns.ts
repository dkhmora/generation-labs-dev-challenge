import { selectItems } from ".";
import { Columns } from "../types";

export const actionPlanColumns: Columns = {
  system: { fieldType: "select", label: "System", items: selectItems.system },
  intervention: {
    fieldType: "select",
    label: "Intervention",
    items: selectItems.intervention,
  },
  dosage: { fieldType: "text", label: "Dosage" },
  frequency: {
    fieldType: "select",
    label: "Frequency",
    items: selectItems.frequency,
  },
  notes: { fieldType: "button/notes", label: "Notes" },
  delete: { fieldType: "button/delete", label: "" },
};

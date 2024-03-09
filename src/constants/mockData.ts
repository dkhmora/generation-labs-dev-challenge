import { selectItems } from ".";
import { ActionPlanData, Columns } from "../types";

const { system, intervention, frequency } = selectItems;

export const actionPlanMockData: ActionPlanData = {
  nutritionAndSupplementIntervention: [
    {
      id: 1,
      system: system[0].value,
      intervention: intervention[3].value,
      dosage: "500mg",
      frequency: frequency[1].value,
      notes: true,
      delete: true,
    },
  ],
  medicationIntervention: [
    {
      id: 1,
      system: system[1].value,
      intervention: intervention[3].value,
      dosage: "500mg",
      frequency: frequency[1].value,
      notes: true,
      delete: true,
    },
  ],
  fitness: [
    {
      id: 1,
      system: system[1].value,
      intervention: intervention[3].value,
      dosage: "500mg",
      frequency: frequency[1].value,
      notes: true,
      delete: true,
    },
  ],
  therapyIntervention: [
    {
      id: 1,
      system: system[1].value,
      intervention: intervention[3].value,
      dosage: "500mg",
      frequency: frequency[1].value,
      notes: true,
      delete: true,
    },
  ],
};

export const columns: Columns = {
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

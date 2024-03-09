import { selectItems } from ".";
import { ActionPlanData } from "../types";

const { system, intervention, frequency } = selectItems;

export const actionPlanMockData: ActionPlanData = {
  nutritionAndSupplementIntervention: [
    {
      id: 1,
      system: system[0].value,
      intervention: intervention[3].value,
      dosage: "500mg",
      frequency: frequency[1].value,
      notes: "Test note",
    },
  ],
  medicationIntervention: [
    {
      id: 1,
      system: system[1].value,
      intervention: intervention[3].value,
      dosage: "500mg",
      frequency: frequency[1].value,
      notes: null,
    },
  ],
  fitness: [
    {
      id: 1,
      system: system[1].value,
      intervention: intervention[3].value,
      dosage: "500mg",
      frequency: frequency[1].value,
      notes: null,
    },
  ],
  therapyIntervention: [
    {
      id: 1,
      system: system[1].value,
      intervention: intervention[3].value,
      dosage: "500mg",
      frequency: frequency[1].value,
      notes: null,
    },
  ],
};

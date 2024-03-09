import { selectItems } from ".";
import { ActionPlanData } from "../types";

const { system, intervention, frequency } = selectItems;

export const defaultData = {
  system: undefined,
  intervention: undefined,
  dosage: undefined,
  frequency: undefined,
  notes: undefined,
};

export const actionPlanMockData: ActionPlanData = {
  nutritionAndSupplementIntervention: [
    {
      system: system[0].value,
      intervention: intervention[3].value,
      dosage: "500mg",
      frequency: frequency[1].value,
      notes: "Test note",
    },
  ],
  medicationIntervention: [
    {
      system: system[1].value,
      intervention: intervention[3].value,
      dosage: "500mg",
      frequency: frequency[1].value,
      notes: null,
    },
  ],
  fitness: [
    {
      system: system[1].value,
      intervention: intervention[3].value,
      dosage: "500mg",
      frequency: frequency[1].value,
      notes: null,
    },
  ],
  therapyIntervention: [
    {
      system: system[1].value,
      intervention: intervention[3].value,
      dosage: "500mg",
      frequency: frequency[1].value,
      notes: null,
    },
  ],
};

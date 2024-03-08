export type FieldTypes = "select" | "button/notes" | "button/delete";

export type Columns = {
  system: { fieldType: FieldTypes; label: string };
  intervention: { fieldType: FieldTypes; label: string };
  dosage: { fieldType: FieldTypes; label: string };
  frequency: { fieldType: FieldTypes; label: string };
  notes: { fieldType: FieldTypes; label: string };
  delete: { fieldType: FieldTypes; label: string };
};

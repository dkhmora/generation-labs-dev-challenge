export type FieldTypes = "select" | "button/notes" | "button/delete";

export type SelectColumn = {
  fieldType: FieldTypes;
  label: string;
  items: CustomSelectItem[];
};

export type Columns = {
  system: SelectColumn;
  intervention: SelectColumn;
  dosage: SelectColumn;
  frequency: SelectColumn;
  notes: { fieldType: FieldTypes; label: string };
  delete: { fieldType: FieldTypes; label: string };
};

export type Rows = {
  id: number;
  system: string;
  intervention: string;
  dosage: string;
  frequency: string;
  notes: boolean;
  delete: boolean;
};

export type CustomSelectItem = {
  value: string;
  color: string;
  tooltipText: string;
};

export type ColumnItems = {
  system: CustomSelectItem[];
  intervention: CustomSelectItem[];
  dosage: CustomSelectItem[];
  frequency: CustomSelectItem[];
};

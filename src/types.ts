export type FieldTypes = "select" | "button/notes" | "button/delete" | "text";
export type SelectColumnLabel =
  | "System"
  | "Intervention"
  | "Dosage"
  | "Frequency";
export type SelectColumnKeys = "system" | "intervention" | "frequency";
export type TextColumnKeys = "dosage";
export type ColumnKeys = SelectColumnKeys | TextColumnKeys | "notes" | "delete";

export type SelectColumn = {
  fieldType: FieldTypes;
  label: SelectColumnLabel;
  items: CustomSelectItem[];
};

export type TextColumn = {
  fieldType: FieldTypes;
  label: string;
};

export type ButtonColumn = {
  fieldType: FieldTypes;
  label: string;
};

export type Columns = {
  system: SelectColumn;
  intervention: SelectColumn;
  dosage: TextColumn;
  frequency: SelectColumn;
  notes: ButtonColumn;
  delete: ButtonColumn;
};

export type Row = {
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
  color?: string;
  textColor?: string;
  tooltipText: string;
};

export type ColumnSelectItems = {
  system: CustomSelectItem[];
  intervention: CustomSelectItem[];
  frequency: CustomSelectItem[];
};

import { TableCellProps } from "@mui/material";

export type FieldTypes = "select" | "button/notes" | "button/delete" | "text";
export type SelectColumnLabel =
  | "System"
  | "Intervention"
  | "Dosage"
  | "Frequency";
export type SelectColumnKeys = "system" | "intervention" | "frequency";
export type TextColumnKeys = "dosage";
export type ColumnKeys = SelectColumnKeys | TextColumnKeys | "notes" | "delete";

export type FieldProps = {
  search?: boolean;
};

export type SelectColumn = {
  fieldType: FieldTypes;
  fieldProps?: FieldProps;
  label: SelectColumnLabel;
  items: CustomSelectItem[];
  width: string;
};

export type TextColumn = {
  fieldType: FieldTypes;
  label: string;
  width: string;
};

export type ButtonColumn = {
  fieldType: FieldTypes;
  label: string;
  width: string;
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
  system: string;
  intervention: string;
  dosage: string;
  frequency: string;
  notes: string | null;
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

export type ActionPlanData = {
  nutritionAndSupplementIntervention: Row[];
  medicationIntervention: Row[];
  fitness: Row[];
  therapyIntervention: Row[];
};

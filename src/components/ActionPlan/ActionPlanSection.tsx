import React, { useState, useRef, useEffect } from "react";
import ActionPlanSectionHeader from "./ActionPlanSectionHeader";
import BoxContainer from "../BoxContainer";
import DataTable from "../DataTable";
import { Columns, Row } from "../../types";
import { selectItems } from "../../constants";

type ActionPlanSectionProps = {
  title: string;
  icon: JSX.Element;
};

function ActionPlanSection({ title, icon }: ActionPlanSectionProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    setTimeout(() => {
      setIsDropdownOpen(true);
    }, 500);
  }, []);

  // Sample rows data
  const rows: Row[] = [
    {
      id: 1,
      system: "Respiratory system",
      intervention: "Q10",
      dosage: "500mg",
      frequency: "Everyday",
      notes: true,
      delete: true,
    },
  ];

  const columns: Columns = {
    system: { fieldType: "select", label: "System", items: selectItems.system },
    intervention: {
      fieldType: "select",
      label: "Intervention",
      items: selectItems.intervention,
    },
    dosage: { fieldType: "select", label: "Dosage", items: selectItems.dosage },
    frequency: {
      fieldType: "select",
      label: "Frequency",
      items: selectItems.frequency,
    },
    notes: { fieldType: "button/notes", label: "Notes" },
    delete: { fieldType: "button/delete", label: "" },
  };

  return (
    <BoxContainer className="p-6">
      <ActionPlanSectionHeader
        title={title}
        icon={icon}
        onDropdownToggle={toggleDropdown}
        isDropdownOpen={isDropdownOpen}
      />

      <div className={`viewport ${isDropdownOpen ? "open" : ""}`}>
        <div
          className={`mt-3 content ${isDropdownOpen ? "open" : ""}`}
          ref={contentRef}
        >
          <DataTable data={rows} columns={columns} />
        </div>
      </div>
    </BoxContainer>
  );
}

const MemoizedActionPlanSection = React.memo(ActionPlanSection);
export default MemoizedActionPlanSection;

import React, { useState, useRef, useEffect } from "react";
import ActionPlanItemHeader from "./ActionPlanItemHeader";
import BoxContainer from "../BoxContainer";
import DataTable from "../DataTable";

type ActionPlanItemProps = {
  title: string;
  icon: JSX.Element;
};

function ActionPlanItem({ title, icon }: ActionPlanItemProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    setTimeout(() => {
      setIsDropdownOpen(true);
    }, 500);
  }, []);

  // Sample rows data
  const rows = [
    {
      id: 1,
      system: "Respiratory System",
      intervention: "Q10",
      dosage: "500mg",
      frequency: "Everyday",
      notes: true,
      delete: true,
    },
  ];

  const columns = [
    { id: "system", label: "System" },
    { id: "intervention", label: "Calories" },
    { id: "dosage", label: "Dosage" },
    { id: "frequency", label: "Frequency" },
    { id: "notes", label: "Notes" },
    { id: "delete", label: "" },
  ];

  const columnFieldTypes = {
    system: "select",
    intervention: "select",
    dosage: "select",
    frequency: "select",
    notes: "button/notes",
    delete: "button/delete",
  };

  return (
    <BoxContainer className="p-6">
      <ActionPlanItemHeader
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
          <DataTable
            data={rows}
            columns={columns}
            columnFieldTypes={columnFieldTypes}
          />
        </div>
      </div>
    </BoxContainer>
  );
}

const MemoizedActionPlanItem = React.memo(ActionPlanItem);
export default MemoizedActionPlanItem;

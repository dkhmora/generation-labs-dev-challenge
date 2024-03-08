import React, { useState, useRef, useEffect } from "react";
import ActionPlanItemHeader from "./ActionPlanItemHeader";
import BoxContainer from "../BoxContainer";
import DataTable from "../DataTable";
import { Columns, Rows } from "../../types";

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
  const rows: Rows[] = [
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

  const columns: Columns = {
    system: { fieldType: "select", label: "System" },
    intervention: { fieldType: "select", label: "Calories" },
    dosage: { fieldType: "select", label: "Dosage" },
    frequency: { fieldType: "select", label: "Frequency" },
    notes: { fieldType: "button/notes", label: "Notes" },
    delete: { fieldType: "button/delete", label: "" },
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
          <DataTable data={rows} columns={columns} />
        </div>
      </div>
    </BoxContainer>
  );
}

const MemoizedActionPlanItem = React.memo(ActionPlanItem);
export default MemoizedActionPlanItem;

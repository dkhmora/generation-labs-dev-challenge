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
    { id: 1, name: "Frozen yoghurt", calories: 159 },
    { id: 2, name: "Ice cream sandwich", calories: 237 },
    { id: 3, name: "Eclair", calories: 262 },
  ];

  return (
    <BoxContainer>
      <ActionPlanItemHeader
        title={title}
        icon={icon}
        onDropdownToggle={toggleDropdown}
        isDropdownOpen={isDropdownOpen}
      />

      <div className={`viewport ${isDropdownOpen ? "open" : ""}`}>
        <div
          className={`content ${isDropdownOpen ? "open" : ""}`}
          ref={contentRef}
        >
          <DataTable data={rows} />
        </div>
      </div>
    </BoxContainer>
  );
}

const MemoizedActionPlanItem = React.memo(ActionPlanItem);
export default MemoizedActionPlanItem;

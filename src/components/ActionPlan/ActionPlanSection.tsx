import React, { useState, useRef, useEffect } from "react";
import ActionPlanSectionHeader from "./ActionPlanSectionHeader";
import BoxContainer from "../BoxContainer";
import DataTable from "../DataTable";
import { Row } from "../../types";
import { columns } from "../../constants/mockData";

type ActionPlanSectionProps = {
  title: string;
  icon: JSX.Element;
  data: Row[];
};

function ActionPlanSection({ title, icon, data }: ActionPlanSectionProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    setTimeout(() => {
      setIsDropdownOpen(true);
    }, 500);
  }, []);

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
          <DataTable data={data} columns={columns} />
        </div>
      </div>
    </BoxContainer>
  );
}

const MemoizedActionPlanSection = React.memo(ActionPlanSection);
export default MemoizedActionPlanSection;

import React, { useState, useRef, useEffect, useContext } from "react";
import ActionPlanSectionHeader from "./ActionPlanSectionHeader";
import BoxContainer from "../BoxContainer";
import DataTable from "../DataTable";
import { actionPlanColumns } from "../../constants";
import { ActionPlanDataContext } from "../ActionPlanDataContext";

type ActionPlanSectionProps = {
  title: string;
  icon: JSX.Element;
  dataKey: string;
};

function ActionPlanSection({ title, icon, dataKey }: ActionPlanSectionProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { data } = useContext(ActionPlanDataContext);
  const sectionData = data[dataKey as keyof typeof data];

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
          <DataTable
            data={sectionData}
            dataKey={dataKey}
            columns={actionPlanColumns}
          />
        </div>
      </div>
    </BoxContainer>
  );
}

const MemoizedActionPlanSection = React.memo(ActionPlanSection);
export default MemoizedActionPlanSection;

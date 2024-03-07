import React, { useState, useRef, useEffect } from "react";
import ActionPlanItemHeader from "./ActionPlanItemHeader";
import BoxContainer from "../BoxContainer";

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
        ></div>
      </div>
    </BoxContainer>
  );
}

const MemoizedActionPlanItem = React.memo(ActionPlanItem);
export default MemoizedActionPlanItem;

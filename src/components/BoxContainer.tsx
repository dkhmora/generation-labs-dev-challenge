import React from "react";

type BoxContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function BoxContainer(BoxContainerProps: BoxContainerProps) {
  const { children, className } = BoxContainerProps;

  return (
    <div className={`rounded-xl bg-[#F7F7F7] p-4 ${className}`}>{children}</div>
  );
}

import React from "react";

type BoxContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function BoxContainer(BoxContainerProps: BoxContainerProps) {
  const { children, className } = BoxContainerProps;

  return (
    <div className={`rounded-xl bg-white p-4 ${className}`}>{children}</div>
  );
}

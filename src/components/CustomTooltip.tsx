import React from "react";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

interface CustomTooltipProps extends TooltipProps {
  backgroundColor?: string;
}

const LightTooltip = styled(
  ({ className, backgroundColor, ...props }: CustomTooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)(({ theme, backgroundColor }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: backgroundColor || theme.palette.common.white,
    color: "#1F1F1F",
    boxShadow: theme.shadows[1],
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    borderRadius: "20px",
    border: "1px solid #F0F0F0",
    padding: "16px",
  },
}));

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  children,
  ...props
}) => {
  return (
    <LightTooltip
      {...props}
      PopperProps={{
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, -10],
            },
          },
        ],
      }}
    >
      {children}
    </LightTooltip>
  );
};

export default CustomTooltip;

import { ReactNode, useState } from "react";
import IconButton from "@mui/material/IconButton";
import CustomTooltip from "./CustomTooltip";

type TooltipProps = {
  title: string;
  backgroundColor?: string;
};

type CustomIconButtonProps = {
  icon: ReactNode;
  hoverIcon?: ReactNode;
  tooltipProps?: TooltipProps;
  onClick: () => void;
};

export default function CustomIconButton(
  customIconButtonProps: CustomIconButtonProps
) {
  const { icon, hoverIcon, tooltipProps, onClick, ...props } =
    customIconButtonProps;
  const [isHovered, setIsHovered] = useState(false);

  const IconButtonComponent = (
    <IconButton
      aria-label="icon-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      {...props}
    >
      {isHovered && hoverIcon ? hoverIcon : icon}
    </IconButton>
  );

  return tooltipProps ? (
    <CustomTooltip {...tooltipProps}>{IconButtonComponent}</CustomTooltip>
  ) : (
    IconButtonComponent
  );
}

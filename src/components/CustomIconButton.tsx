import { ReactNode, useState } from "react";
import IconButton from "@mui/material/IconButton";

type CustomIconButtonProps = {
  icon: ReactNode;
  hoverIcon?: ReactNode;
  onClick: () => void;
};

export default function CustomIconButton(
  customIconButtonProps: CustomIconButtonProps
) {
  const { icon, hoverIcon, onClick, ...props } = customIconButtonProps;
  const [isHovered, setIsHovered] = useState(false);

  return (
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
}

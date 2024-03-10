import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";
interface CustomTooltipProps extends TooltipProps {
  backgroundColor?: string;
}

const LightTooltip = styled(({ className, ...props }: CustomTooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme, backgroundColor }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: backgroundColor
      ? backgroundColor
      : theme.palette.common.white,
    color: "#1F1F1F",
    boxShadow: theme.shadows[1],
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "18px",
    borderRadius: "20px",
    border: "1px solid #F0F0F0",
    padding: "16px",
  },
}));

export default function CustomTooltip(customTooltipProps: CustomTooltipProps) {
  const { children, ...props } = customTooltipProps;

  return (
    <LightTooltip
      placement="bottom-start"
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
      {...props}
    >
      {children}
    </LightTooltip>
  );
}

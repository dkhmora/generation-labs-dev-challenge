import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
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

export default function CustomTooltip(customTooltipProps: TooltipProps) {
  const { children, ...props } = customTooltipProps;

  return (
    <LightTooltip
      placement="bottom-start"
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, -10],
              },
            },
          ],
        },
      }}
      {...props}
    >
      {children}
    </LightTooltip>
  );
}

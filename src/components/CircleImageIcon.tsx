type CircleImageIconProps = {
  icon: string;
  color?: string;
  className?: string;
};

export default function CircleImageIcon(CircleImageIcon: CircleImageIconProps) {
  const { icon, className } = CircleImageIcon;

  return (
    <div
      className={`rounded-3xl p-2.5 h-12 w-12 items-center align-center content-center justify-center ${className}`}
    >
      <img src={icon} className="h-full w-full self-center" />
    </div>
  );
}

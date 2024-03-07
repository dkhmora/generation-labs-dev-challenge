import MedicationIcon from "../../assets/medication.svg";
import FootprintIcon from "../../assets/footprint.svg";
import PillIcon from "../../assets/pill.svg";
import SpaIcon from "../../assets/spa.svg";
import CircleImageIcon from "../CircleImageIcon";
import ActionPlanItem from "./ActionPlanItem";

const MOCK_ACTION_PLAN_ITEMS = [
  {
    title: "Nutrition & Supplement Intervention",
    icon: <CircleImageIcon icon={MedicationIcon} className="bg-[#E99774]" />,
  },
  {
    title: "Medication Suggestion",
    icon: <CircleImageIcon icon={PillIcon} className="bg-[#DB7676]" />,
  },
  {
    title: "Fitness",
    icon: <CircleImageIcon icon={FootprintIcon} className="bg-[#76BDDB]" />,
  },
  {
    title: "Therapy Intervention",
    icon: <CircleImageIcon icon={SpaIcon} className="bg-[#CEC46F]" />,
  },
];

export default function ActionPlan(actionPlanProps: { userName: string }) {
  const { userName } = actionPlanProps;

  return (
    <section className="w-full">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Action plan for {userName}</h2>

        <div className="space-y-4">
          {MOCK_ACTION_PLAN_ITEMS.map((actionPlanItem, index) => (
            <ActionPlanItem
              key={`${actionPlanItem.title}-${index}`}
              {...actionPlanItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

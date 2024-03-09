import MedicationIcon from "../../assets/medication.svg";
import FootprintIcon from "../../assets/footprint.svg";
import PillIcon from "../../assets/pill.svg";
import SpaIcon from "../../assets/spa.svg";
import CircleImageIcon from "../CircleImageIcon";
import ActionPlanSection from "./ActionPlanSection";

const MOCK_ACTION_PLAN_SECTIONS = [
  {
    title: "Nutrition & Supplement Intervention",
    dataKey: "nutritionAndSupplementIntervention",
    icon: <CircleImageIcon icon={MedicationIcon} className="bg-[#E99774]" />,
  },
  {
    title: "Medication Suggestion",
    dataKey: "medicationIntervention",
    icon: <CircleImageIcon icon={PillIcon} className="bg-[#DB7676]" />,
  },
  {
    title: "Fitness",
    dataKey: "fitness",
    icon: <CircleImageIcon icon={FootprintIcon} className="bg-[#76BDDB]" />,
  },
  {
    title: "Therapy Intervention",
    dataKey: "therapyIntervention",
    icon: <CircleImageIcon icon={SpaIcon} className="bg-[#CEC46F]" />,
  },
];

export default function ActionPlan(actionPlanProps: { userName: string }) {
  const { userName } = actionPlanProps;

  return (
    <section className="w-full">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Action plan for {userName}</h2>

        <div className="space-y-4">
          {MOCK_ACTION_PLAN_SECTIONS.map((actionPlanSection, index) => (
            <ActionPlanSection
              key={`${actionPlanSection.title}-${index}`}
              dataKey={actionPlanSection.dataKey}
              title={actionPlanSection.title}
              icon={actionPlanSection.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

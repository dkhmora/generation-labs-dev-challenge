import MedicationIcon from "../../assets/medication.svg";
import FootprintIcon from "../../assets/footprint.svg";
import PillIcon from "../../assets/pill.svg";
import SpaIcon from "../../assets/spa.svg";
import CircleImageIcon from "../CircleImageIcon";
import ActionPlanSection from "./ActionPlanSection";
import { Button } from "@mui/material";
import LeftChevron from "../../assets/left_chevron.svg";

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
        <div>
          <Button
            variant="text"
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              textTransform: "none",
              color: "black",
              borderRadius: 12,
              paddingLeft: 0,
            }}
          >
            <div className="mr-3">
              <CircleImageIcon icon={LeftChevron} className="bg-white p-3.5" />
            </div>
            Back
          </Button>

          <div className="flex flex-col justify-between align-left items-left pr-2 md:flex-row md:align-center md:items-center">
            <div className="flex flex-col justify-left align-left items-left md:space-x-6 md:flex-row md:justify-center md:items-center md:align-center">
              <h2 className="text-2xl font-semibold">
                Action plan for {userName}
              </h2>

              <div className="w-auto">
                <Button
                  sx={{
                    textDecoration: "underline",
                    ":hover": {
                      textDecoration: "none",
                    },
                    textTransform: "none",
                    borderRadius: 6,
                    fontSize: "16px",
                    color: "#66430D",
                  }}
                  onClick={() => {
                    console.log("Forgot Password Clicked");
                  }}
                >
                  Duplicate last action plan
                </Button>
              </div>
            </div>

            <div className="w-auto">
              <Button
                sx={{
                  textDecoration: "underline",
                  ":hover": {
                    textDecoration: "none",
                  },
                  textTransform: "none",
                  borderRadius: 6,
                  fontSize: "16px",
                  color: "#66430D",
                }}
                onClick={() => {
                  console.log("Forgot Password Clicked");
                }}
              >
                Latest report
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
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

          <div className="w-full md:w-auto md:self-end">
            <Button
              fullWidth
              variant="contained"
              sx={{
                textTransform: "none",
                borderRadius: 6,
                fontSize: "16px",
                color: "#fff",
                backgroundColor: "#66430D",
                paddingLeft: 8,
                paddingRight: 8,
              }}
              onClick={() => {
                console.log("Forgot Password Clicked");
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

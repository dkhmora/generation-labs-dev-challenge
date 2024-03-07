import logo from "../assets/logo.svg";
import MobileNavigationDrawer from "./MobileNavigationDrawer";
import ProfileCircleImage from "../assets/profile_circle.svg";
import NavbarItemsList from "./NavbarItemsList";

const MAIN_NAVIGATION_ITEMS = [
  "Dashboard",
  "Clients",
  "Appointment",
  "Action Plan",
  "Prescription",
];

export default function AppBar() {
  return (
    <header>
      <div className="flex items-center w-full px-6 bg-white shadow-md justify-between lg:py-0 lg:shadow-none lg:px-32">
        <div className="flex justify-start lg:hidden">
          <MobileNavigationDrawer items={MAIN_NAVIGATION_ITEMS} />
        </div>

        <div className="flex justify-center flex-grow md:justify-start md:flex-grow-0">
          <img src={logo} alt="logo" className="h-auto w-auto max-h-10" />
        </div>

        <div className="flex justify-end w-8"></div>

        <div className="flex flex-row items-center hidden space-x-12 lg:flex">
          <NavbarItemsList
            items={MAIN_NAVIGATION_ITEMS}
            defaultItem="Dashboard"
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 0,
            }}
          />

          <img
            src={ProfileCircleImage}
            alt="profile_circle_image"
            className="h-auto w-auto max-h-10"
          />
        </div>
      </div>
    </header>
  );
}

import SecondaryNav from "../components/SecondaryNav";
import ProfilePage from "./ProfilePage";
import "../styles/pages/HomePage.scss";

const HOME_NAV_ITEMS = [{ label: "Me", path: "/me" }];

function HomePage() {
  return (
    <div className="home-page">
      <SecondaryNav items={HOME_NAV_ITEMS} />
      <div className="home-content">
        <ProfilePage />
      </div>
    </div>
  );
}

export default HomePage;

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AgentHeroBanner from "./AgentHeroBanner";
import UserHeroBanner from "./UserHeroBanner";
import ExpertSection from "../utils/ExpertSection";
import { useAuth } from "../../commons/auth";

function AgentDashboard() {
  const auth = useAuth();

  return (
    <div className="Agent">
      <Header />

      {auth.user ? (
        <UserHeroBanner />
      ) : (
        <AgentHeroBanner
          header="Esther O."
          text="Experts in residential homes and luxury apartments and AiBnBs, licensed in East Africa. Trusted by professionals and companies, with a 4.5-star rating on Trustpilot."
          // Switchover
          label="List a Property"
        />
      )}

      <ExpertSection
        header="Meet Expert Agents"
        text="Our certified experts are ready to attend to you"
      />
      <Footer />
    </div>
  );
}

export default AgentDashboard;

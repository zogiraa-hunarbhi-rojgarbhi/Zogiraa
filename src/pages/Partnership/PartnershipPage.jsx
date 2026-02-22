import "./PartnershipPage.css";
import PartnershipHero from "./components/PartnershipHero";
import PartnershipCards from "./components/PartnershipCards";

export default function PartnershipPage() {
  return (
    <div className="partnership-page">
      <PartnershipHero />
      <PartnershipCards />
    </div>
  );
}

// import SavingBanner from "../components/Saving/SavingBanner";
import CommercialBank from "../components/Saving/CommercialBank";
import Financial from "../components/Saving/Financial";
import OnlineBanking from "../components/Saving/OnlineBanking";
import SavingCards from "../components/Saving/SavingCards";
import SecureBanner from "../components/Saving/SecureBanner";

const Saving = () => {
  return (
    <div>
      {/* <SavingBanner /> */}
      <SecureBanner></SecureBanner>
      <SavingCards />
      <Financial></Financial>
      <OnlineBanking></OnlineBanking>
      <CommercialBank></CommercialBank>
    </div>
  );
};

export default Saving;

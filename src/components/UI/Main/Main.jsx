import useTranslation from "next-translate/useTranslation";
import ConstructionSection from "../ConstructionSection";
import InformationSection from "../InformationSection";
import Banner from "../Banner/Banner";
import ContactDealer from "../ContactDealer/ContactDealer";
import OverviewSection from "../OverviewSection";
import Dealers from "../Dealers/Dealers";
import ScrollToTop from "components/Layout/ScrollToTop";
import cls from "./style.module.scss";

export function Main() {
  const { t } = useTranslation("common");

  return (
    <>
      <main className={cls.main}>
        <Banner />
        <ContactDealer />
        <InformationSection />
        <ConstructionSection />
        <OverviewSection />
        <Dealers />
      </main>
      <ScrollToTop />
    </>
  );
}

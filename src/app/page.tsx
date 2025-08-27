import AcademicJourney from "./component/AcademicJourney";
import Banner from "./component/Banner";
import EstimatedUniversity from "./component/EstimatedUniversity";
import VieService from "./component/VieService";
import VoyageService from "./component/VoyageService";
import WhyChooseCard from "./component/WhyChooseCard";
import WhyChooseUs from "./component/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-[#FBFBFB]">
      <Banner />
      <VieService />
      <AcademicJourney />
      <EstimatedUniversity />
      <VoyageService />
      <WhyChooseUs />
      <WhyChooseCard/>
    </div>
  );
}

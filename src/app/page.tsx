import AcademicJourney from "./component/AcademicJourney";
import Banner from "./component/Banner";
import VieService from "./component/VieService";
import WhyChooseUs from "./component/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-[#FBFBFB]">
      <Banner />
      <VieService/>
      <AcademicJourney />
      <WhyChooseUs />
    </div>
  );
}

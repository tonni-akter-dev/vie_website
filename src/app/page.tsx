import AcademicJourney from "./component/AcademicJourney";
import Banner from "./component/Banner";
import WhyChooseUs from "./component/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-[#FBFBFB]">
      <Banner />
      <AcademicJourney />
      <WhyChooseUs />
    </div>
  );
}

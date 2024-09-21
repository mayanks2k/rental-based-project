import MainLayout from "@/layout/MainLayout";
import { CarRentalExperience } from "./components/CarRentalExperience";
import MarqueeList from "src/components/Form/MarqueeList/MarqueeList";
import OurFeatures from "src/components/Form/OurFeatures/OurFeatures";
import Review from "src/components/Form/Review/Review";
import Stepper from "src/components/Form/Stepper/Stepper";
import NewAndPromo from "@/components/NewAndPromo";
import Banner from "@/components/Banner";
import { Header } from "@/components/Header";
import { KpiSection } from "./components/KPISection";
import FindVehicle from "@/components/Form/FindVehicle/FindVehicle";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Section4 from "@/components/Home/Section4";
import Section5 from "@/components/Home/Section5";
import Section6 from "@/components/Home/Section6";

export const metadata = {
  title: "Home Page",
};

const Home = () => {
  return (
    <MainLayout>
      <div
        className="px-2 sm:px-5 md:px-10 lg:px-32"
        style={{
          backgroundImage: "url(/assets/images/home_page.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Add this line
        }}
      >
        <Header />
        <div className="pt-20 pb-14">
          <p className="text-white text-5xl font-bold">
            Subscription made{" "}
            <span className="text-green-500">effortless.</span> Your stress free
            journey starts here.
          </p>
          <FindVehicle/>
          <p className="my-12 text-white">
            Experience car ownership without the need for a down payment or a
            car loan. Our monthly subscription includes insurance, servicing,
            and maintenance, offering you complete peace of mind. Enjoy the
            freedom of no long-term commitments, return, extend, or buy-out the
            car whenever you like. And the best part? It's more affordable than
            your typical EMI!
          </p>
          {/* <FindVehicle /> */}
          <Stepper />
        </div>
      </div>
      <MarqueeList />
      {/* Section 2 */}
      <Section2 />
      {/* Section 3 */}
      <Section3 />
      {/* Section 4 */}
      <Section4 />
      {/* Section 5 */}
      <Section5 />
      {/* Section 6 */}
      <Section6 />

      <Review />
      <NewAndPromo />
      <CarRentalExperience />
      <OurFeatures />
      <KpiSection />
      <Banner />
    </MainLayout>
  );
};

export default Home;

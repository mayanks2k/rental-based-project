import { Header } from "@/components/Header";
import MainLayout from "@/layout/MainLayout";
import Section1 from "./components/Section1";
import Section3 from "./components/Section3";
import Section2 from "./components/Section2";

export const metadata = {
  title: "car Charge",
};

const page = () => {
  return (
    <MainLayout>
      <div
        className="px-2 sm:px-5 md:px-10 lg:px-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), 
          url(/assets/images/charge/ev.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "100% 70%",
        }}
      >
        <Header />
        <Section3 />
      </div>
      <Section1 />
      <Section2 />
    </MainLayout>
  );
};

export default page;

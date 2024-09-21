import MainLayout from "@/layout/MainLayout";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import { Header } from "@/components/Header";

export const metadata = {
  title: "car Green Fleet",
};

const page = () => {
  return (
    <MainLayout>
      <div
        className="px-2 sm:px-5 md:px-10 lg:px-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), 
          url(/assets/images/cargreenfleet/3.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <header className="text-white py-20 text-center">
          <h1 className="text-4xl font-bold">car Green Fleet</h1>
          <p className="mt-2 text-xl">
            Be a Part of the Green Future with car Green Fleet
          </p>
        </header>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
    </MainLayout>
  );
};
export default page;

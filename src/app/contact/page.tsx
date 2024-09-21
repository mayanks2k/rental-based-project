import React from "react";
import { ContactFormModule } from "./components/contactFormModule";
import { ContactCard } from "./components/card";
import PageLayout from "@/layout/PageLayout";
import ImageCard from "./components/ImageCard";
import ContactInfoCard from "./components/ContactInfoCard";

export const metadata = {
  title: "Contact",
};
const ContactPage = () => {
  return (
    <PageLayout title="Contact Us" imageURL="url(/assets/images/1.jpg)">
      <div className="md:px-32 px-8">
        <ContactInfoCard />
        <ImageCard />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 my-10">
          <div className="col-span-2 ">
            <ContactFormModule />
          </div>
          <div className="md:my-12">
            <ContactCard
              title="car  LIMITED"
              address="MaberthVilla, Caranzalem, North Goa, Goa (India), 403002"
              phoneNumber="1800-257-3265"
              email="connect@gocar.com"
              brochureUrl="/path/to/brochure.pdf"
              className="mb-4" // Add margin bottom to create space
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;

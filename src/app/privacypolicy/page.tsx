import { MdOutlineEmail } from "react-icons/md";
import { PrivacyPolicy, Section, SectionComponentProps } from "./constants";
import policy from "./privacypolicy.json";
import { Header } from "@/components/Header";
import MainLayout from "@/layout/MainLayout";
import { FaFileContract } from "react-icons/fa6";

const Page: React.FC = () => {
  return (
    <MainLayout>
      <div className="px-2 sm:px-5 md:px-10 lg:px-32 bg-slate-800">
        <Header />
      </div>
      <div className="px-2 sm:px-5 md:px-10 lg:px-32 py-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 font-serif text-blue-600 flex items-center">
          <FaFileContract className="mr-3" />
          {policy.title}
        </h1>
        <p className="text-gray-600 mb-8 text-justify">{policy.description}</p>

        <div className="space-y-6">
          {Object.entries(policy).map(([key, value]) => {
            if (key === "contact") {
              return null; // Skip rendering contact section in the loop
            }

            if (key === "title" || key === "company" || key === "description") {
              return null; // Skip rendering non-section fields
            }

            const section = value as Section; // Type assertion to Section

            return (
              <SectionComponent
                key={key}
                title={section.title}
                content={section.content}
                subSections={section.subTitle}
              />
            );
          })}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">
            {policy.contact.title}
          </h2>
          <p className="text-gray-700 text-justify mb-2">
            {policy.contact.content}
          </p>
          <div className="flex items-center">
            <MdOutlineEmail color="#3b82f6" className="text-gray-500 mr-2" size={24} />
            <a
              href={`mailto:${policy.contact.email}`}
              className="text-blue-600 underline"
            >
              {policy.contact.email}
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const SectionComponent: React.FC<SectionComponentProps> = ({
  title,
  content,
  subSections,
}) => {
  return (
    <div className="border-b pb-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 text-justify">{content}</p>
      {subSections &&
        subSections.map((subSection, index) => (
          <div key={index} className="pl-6 mt-4 border-l-2 border-gray-200">
            <h3 className="text-md font-medium mb-1">{subSection.title}</h3>
            <p className="text-gray-600 text-justify">{subSection.content}</p>
          </div>
        ))}
    </div>
  );
};

export default Page;

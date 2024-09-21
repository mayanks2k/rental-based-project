import PageLayout from "@/layout/PageLayout"
import { Directors } from "./components/directors"
import { QualityProposition } from "./components/qualityProposition"
import { KpiSection } from "../components/KPISection"
import OurFeatures from "@/components/Form/OurFeatures/OurFeatures"
import Banner from "@/components/Banner"

export const metadata = {
    title: "About Us",
  };
const AboutUsPage:React.FC = () => {
    
    return (
        <PageLayout title='About Us' imageURL="url('/assets/images/1.jpg')" >
            <div className=''>
                <KpiSection />
                <OurFeatures />
                {/* <Directors /> */}
                {/* <QualityProposition /> */}
                <Banner />
            </div>
        </PageLayout>
    )
}

export default AboutUsPage;
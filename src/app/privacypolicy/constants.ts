export interface PrivacyPolicy {
  title: string;
  company: string;
  description: string;
  dataCollection: Section;
  policyModifications: Section;
  userConduct: Section;
  authorizationConsent: Section;
  subscriptionLimit: Section;
  chargesDocumentation: Section;
  communication: Section;
  noContractualObligation: Section;
  websiteAnalytics: Section;
  contact: {
    title: string;
    email: string;
  };
}

export interface Section {
  title: string;
  content: string;
  subTitle?: SubSection[];
}

export interface SubSection {
  title: string;
  content: string;
}
export interface SectionComponentProps {
  title: string;
  content: string;
  subSections?: SubSection[];
}
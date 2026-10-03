import siteData from "@/data/site.json";

// ── Root Schema Types ──
export type RawSiteData = typeof siteData;
export type SecureViewSchema = typeof siteData.SecureView;
export type SecureViewSections = SecureViewSchema["sections"];
export type SecureViewTemplateComponents = SecureViewSchema["templateComponents"];

// ── Universal SectionProps Interface (Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type SecureViewNavbarData = SecureViewSections["navbar"]["variants"]["SecureViewNavbar1"];
export type SecureViewNavItemsData = SecureViewNavbarData["navItems"];
export type SecureViewFooterData = SecureViewSections["footer"]["variants"]["SecureViewFooter1"];
export type SecureViewHeroData = SecureViewSections["hero"]["variants"]["SecureViewHero1"];
export type SecureViewAboutData = SecureViewSections["about"]["variants"]["SecureViewAbout1"];
export type SecureViewServicesData = SecureViewSections["services"]["variants"]["SecureViewServices1"];
export type SecureViewCaseStudiesData = SecureViewSections["caseStudies"]["variants"]["SecureViewCaseStudies1"];
export type SecureViewTeamData = SecureViewSections["team"]["variants"]["SecureViewTeam1"];
export type SecureViewBlogData = SecureViewSections["blog"]["variants"]["SecureViewBlog1"];
export type SecureViewWhyChooseUsData = SecureViewSections["whyChooseUs"]["variants"]["SecureViewWhyChooseUs1"];
export type SecureViewCtaData = SecureViewSections["cta"]["variants"]["SecureViewCta1"];
export type SecureViewPageTopSectionData = SecureViewSections["pageTopSection"]["variants"]["SecureViewPageTopSection1"];
export type SecureViewTestimonialData = SecureViewSections["testimonial"]["variants"]["SecureViewTestimonial1"];
export type SecureViewInstallationProcessData = SecureViewSections["installationProcess"]["variants"]["SecureViewInstallationProcess1"];
export type SecureViewGalleryData = SecureViewSections["gallery"]["variants"]["SecureViewGallery1"];
export type SecureViewBrandsData = SecureViewSections["brands"]["variants"]["SecureViewBrands1"];
export type SecureViewPricingData = SecureViewSections["pricing"]["variants"]["SecureViewPricing1"];
export type SecureViewContactData = SecureViewSections["contact"]["variants"]["SecureViewContact1"];
export type SecureViewGetAQuoteData = SecureViewSections["getAQuote"]["variants"]["SecureViewGetAQuote1"];
export type SecureViewFaqData = SecureViewSections["faq"]["variants"]["SecureViewFaq1"];
export type SecureViewLegalData = SecureViewSections["legal"];
export type SecureViewNotFoundData = SecureViewSections["notFound"]["variants"]["SecureViewNotFound1"];

// AMC Maintenance Section Types
export type SecureViewAmcData = SecureViewSections["amcMaintenance"]["variants"]["SecureViewAmc1"];
export type SecureViewOurAmcData = SecureViewSections["amcMaintenance"]["variants"]["SecureViewOurAmc1"];
export type SecureViewAmcEnquiryData = SecureViewSections["amcMaintenance"]["variants"]["SecureViewEnquiry1"];
export type SecureViewAmcProcessData = SecureViewSections["amcMaintenance"]["variants"]["SecureViewProcessAmc1"];

// ── Inferred Sub-item Data Models ──
export type NavItem = SecureViewNavItemsData[number];
export type NavLink = NavItem;
export type HeroBadge = SecureViewHeroData["badges"][number];
export type AboutFeature = SecureViewAboutData["features"][number];
export type AboutBulletPoint = SecureViewAboutData["bulletPoints"][number];
export type ServiceItem = SecureViewServicesData["servicesList"][number];
export type CaseStudyItem = SecureViewCaseStudiesData["caseStudies"][number];
export type TeamMember = SecureViewTeamData["teamMembers"][number];
export type BlogPost = SecureViewBlogData["blogPosts"][number];
export type WhyChooseUsFeature = SecureViewWhyChooseUsData["features"][number];
export type TestimonialItem = SecureViewTestimonialData["testimonials"][number];
export type GalleryImageItem = SecureViewGalleryData["galleryImages"][number];
export type BrandItem = SecureViewBrandsData["brandsList"][number];
export type PricingPlanItem = SecureViewPricingData["plans"][number];
export type PolicyPageData = SecureViewLegalData["privacyPolicy"];
export type PolicySectionItem = PolicyPageData["sections"][number];

// ── Short Aliases ──
export type NavbarData = SecureViewNavbarData;
export type FooterData = SecureViewFooterData;
export type HeroData = SecureViewHeroData;
export type AboutData = SecureViewAboutData;
export type ServicesData = SecureViewServicesData;
export type CaseStudiesData = SecureViewCaseStudiesData;
export type TeamData = SecureViewTeamData;
export type BlogData = SecureViewBlogData;
export type WhyChooseUsData = SecureViewWhyChooseUsData;
export type CtaData = SecureViewCtaData;
export type PageTopSectionData = SecureViewPageTopSectionData;
export type TestimonialData = SecureViewTestimonialData;
export type InstallationProcessData = SecureViewInstallationProcessData;
export type GalleryData = SecureViewGalleryData;
export type BrandsData = SecureViewBrandsData;
export type PricingData = SecureViewPricingData;
export type ContactData = SecureViewContactData;
export type GetAQuoteData = SecureViewGetAQuoteData;
export type FaqData = SecureViewFaqData;
export type LegalData = SecureViewLegalData;
export type NotFoundData = SecureViewNotFoundData;

// ── Canonical Mapped Site Data Object ──
const sec = siteData.SecureView.sections;

const servicesVariant = sec.services.variants.SecureViewServices1;
const servicesMapped = {
  ...servicesVariant,
  services: servicesVariant.servicesList,
  servicesList: servicesVariant.servicesList,
};

// Legal mapping with case-insensitive / shortcut compatibility (disclaimer vs Disclaimer)
const legalMapped = {
  ...sec.legal,
  disclaimer: sec.legal.Disclaimer,
};

const siteMap = {
  navbar: sec.navbar.variants.SecureViewNavbar1,
  navItems: sec.navbar.variants.SecureViewNavbar1.navItems,
  footer: sec.footer.variants.SecureViewFooter1,

  hero: sec.hero.variants.SecureViewHero1,
  about: sec.about.variants.SecureViewAbout1,
  services: servicesMapped,
  caseStudies: sec.caseStudies.variants.SecureViewCaseStudies1,
  team: sec.team.variants.SecureViewTeam1,
  blog: sec.blog.variants.SecureViewBlog1,
  whyChooseUs: sec.whyChooseUs.variants.SecureViewWhyChooseUs1,
  cta: sec.cta.variants.SecureViewCta1,
  pageTopSection: sec.pageTopSection.variants.SecureViewPageTopSection1,
  testimonial: sec.testimonial.variants.SecureViewTestimonial1,
  installationProcess: sec.installationProcess.variants.SecureViewInstallationProcess1,
  gallery: sec.gallery.variants.SecureViewGallery1,
  brands: sec.brands.variants.SecureViewBrands1,
  pricing: sec.pricing.variants.SecureViewPricing1,
  contact: sec.contact.variants.SecureViewContact1,
  getAQuote: sec.getAQuote.variants.SecureViewGetAQuote1,
  faq: sec.faq.variants.SecureViewFaq1,
  legal: legalMapped,
  privacyPolicy: sec.legal.privacyPolicy,
  termsAndConditions: sec.legal.termsAndConditions,
  disclaimer: sec.legal.Disclaimer,
  warrantyPolicy: sec.legal.warrantyPolicy,
  notFound: sec.notFound.variants.SecureViewNotFound1,

  // AMC Maintenance Sections
  amcMaintenance: sec.amcMaintenance.variants,
  amcData: sec.amcMaintenance.variants.SecureViewAmc1,
  ourAmcData: sec.amcMaintenance.variants.SecureViewOurAmc1,
  amcEnquiryData: sec.amcMaintenance.variants.SecureViewEnquiry1,
  amcProcessData: sec.amcMaintenance.variants.SecureViewProcessAmc1,

  // Compatibility object so existing components importing `site.home.*` don't break
  home: {
    hero: sec.hero.variants.SecureViewHero1,
    about: sec.about.variants.SecureViewAbout1,
    services: servicesMapped,
    caseStudies: sec.caseStudies.variants.SecureViewCaseStudies1,
    team: sec.team.variants.SecureViewTeam1,
    blog: sec.blog.variants.SecureViewBlog1,
    whyChooseUs: sec.whyChooseUs.variants.SecureViewWhyChooseUs1,
    cta: sec.cta.variants.SecureViewCta1,
    testimonial: sec.testimonial.variants.SecureViewTestimonial1,
  },

  // Root Tree
  SecureView: siteData.SecureView,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default site;

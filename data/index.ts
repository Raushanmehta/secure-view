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
export type SecureViewContactData = any;
export type SecureViewGetAQuoteData = any;

// ── Inferred Sub-item Data Models ──
export type NavItem = SecureViewNavbarData["navItems"][number];
export type NavLink = NavItem;
export type HeroBadge = SecureViewHeroData["badges"][number];
export type AboutFeature = SecureViewAboutData["features"][number];
export type AboutBulletPoint = SecureViewAboutData["bulletPoints"][number];
export type ServiceItem = any;
export type CaseStudyItem = SecureViewCaseStudiesData["caseStudies"][number];
export type TeamMember = SecureViewTeamData["teamMembers"][number];
export type BlogPost = SecureViewBlogData["blogPosts"][number];
export type WhyChooseUsFeature = SecureViewWhyChooseUsData["features"][number];
export type TestimonialItem = SecureViewTestimonialData["testimonials"][number];
export type GalleryImageItem = SecureViewGalleryData["galleryImages"][number];
export type BrandItem = SecureViewBrandsData["brandsList"][number];
export type PricingPlanItem = SecureViewPricingData["plans"][number];
export type ContactMethodItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBgColor: string;
  iconBorderColor: string;
  iconColor: string;
  linkText: string;
  linkHref: string;
  linkColor: string;
  linkHoverColor: string;
};

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

// ── Canonical Mapped Site Data Object ──
const sec = siteData.SecureView.sections;

const defaultContact = {
  badge: "CONTACT US",
  titlePart1: "Get in Touch",
  titleHighlight: "with Us",
  contactDetails: [
    {
      icon: "Phone",
      title: "Call Us",
      value: "+1 (800) 732-8731",
      subtitle: "Mon - Sat: 9:00 AM - 7:00 PM"
    },
    {
      icon: "Mail",
      title: "Email Us",
      value: "support@secureview.com",
      subtitle: "Direct response within 2 hours"
    },
    {
      icon: "MapPin",
      title: "Visit Our Experience Center",
      value: "1200 Security Boulevard, Suite 400, New York, NY 10001, USA"
    }
  ],
  formTitlePart1: "Send Us a",
  formTitleHighlight: "Message",
  formDescription: "Complete this quick inquiry form and our certified surveillance engineers will get back to you promptly.",
  formButtonText: "Send Message",
  services: [
    "CCTV Installation & Setup",
    "24/7 Remote Monitoring",
    "Access Control & Enterprise Security",
    "Maintenance & AMC Support",
    "Smart AI & Cloud Surveillance",
    "Other Security Inquiry"
  ],
  mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
};

const siteMap = {
  navbar: sec.navbar.variants.SecureViewNavbar1,
  footer: sec.footer.variants.SecureViewFooter1,
  hero: sec.hero.variants.SecureViewHero1,
  about: sec.about.variants.SecureViewAbout1,
  services: {
    ...sec.services.variants.SecureViewServices1,
    servicesList: (sec.services.variants.SecureViewServices1 as any).servicesList || (sec.services.variants.SecureViewServices1 as any).services || [],
  },
  caseStudies: sec.caseStudies.variants.SecureViewCaseStudies1,
  team: sec.team.variants.SecureViewTeam1,
  blog: sec.blog.variants.SecureViewBlog1,
  whyChooseUs: sec.whyChooseUs.variants.SecureViewWhyChooseUs1,
  cta: sec.cta.variants.SecureViewCta1,
  pageTopSection: sec.pageTopSection.variants.SecureViewPageTopSection1,
  testimonial: sec.testimonial.variants.SecureViewTestimonial1,
  installationProcess: sec.installationProcess.variants.SecureViewInstallationProcess1,
  gallery: sec.gallery.variants.SecureViewGallery1,
  brands: (sec as any)?.brands?.variants?.SecureViewBrands1 || {
    badge: "Brand We Work With",
    titlePart1: "Trusted Security",
    titleHighlight: "Brands",
    description: "We partner with leading CCTV and security brands to deliver reliable, high-performance solutions for your safety.",
    brandsList: [],
  },
  pricing: (sec as any)?.pricing?.variants?.SecureViewPricing1 || {
    badge: "PRICING PLANS",
    titlePart1: "Simple Plans for Your",
    titleHighlight: "Security Needs",
    description: "Choose the right CCTV solution for your home or business. Transparent pricing, no hidden costs.",
    plans: [],
  },
  contact: (sec as any)?.contact?.variants?.SecureViewContact1 || defaultContact,
  getAQuote: (sec as any)?.getAQuote?.variants?.SecureViewGetAQuote1,

  // Compatibility section shortcuts
  navLinks: sec.navbar.variants.SecureViewNavbar1.navItems,
  heroData: sec.hero.variants.SecureViewHero1,
  aboutData: sec.about.variants.SecureViewAbout1,
  servicesData: sec.services.variants.SecureViewServices1,
  caseStudiesData: sec.caseStudies.variants.SecureViewCaseStudies1,
  teamData: sec.team.variants.SecureViewTeam1,
  blogData: sec.blog.variants.SecureViewBlog1,
  footerData: sec.footer.variants.SecureViewFooter1,
  whyChooseUsData: sec.whyChooseUs.variants.SecureViewWhyChooseUs1,
  ctaData: sec.cta.variants.SecureViewCta1,
  pageTopSectionData: sec.pageTopSection.variants.SecureViewPageTopSection1,
  testimonialData: sec.testimonial.variants.SecureViewTestimonial1,
  installationProcessData: sec.installationProcess.variants.SecureViewInstallationProcess1,
  galleryData: sec.gallery.variants.SecureViewGallery1,
  brandsData: (sec as any)?.brands?.variants?.SecureViewBrands1 || {
    badge: "Brand We Work With",
    titlePart1: "Trusted Security",
    titleHighlight: "Brands",
    description: "We partner with leading CCTV and security brands to deliver reliable, high-performance solutions for your safety.",
    brandsList: [],
  },
  pricingData: (sec as any)?.pricing?.variants?.SecureViewPricing1 || {
    badge: "PRICING PLANS",
    titlePart1: "Simple Plans for Your",
    titleHighlight: "Security Needs",
    description: "Choose the right CCTV solution for your home or business. Transparent pricing, no hidden costs.",
    plans: [],
  },
  contactData: (sec as any)?.contact?.variants?.SecureViewContact1 || defaultContact,
  getAQuoteData: (sec as any)?.getAQuote?.variants?.SecureViewGetAQuote1,

  // Root Tree
  SecureView: siteData.SecureView,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default Object.assign(siteMap, siteData);

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

// ── Inferred Sub-item Data Models ──
export type NavItem = SecureViewNavbarData["navItems"][number];
export type NavLink = NavItem;
export type HeroBadge = SecureViewHeroData["badges"][number];
export type AboutFeature = SecureViewAboutData["features"][number];
export type AboutBulletPoint = SecureViewAboutData["bulletPoints"][number];
export type ServiceItem = SecureViewServicesData["services"][number];
export type CaseStudyItem = SecureViewCaseStudiesData["caseStudies"][number];
export type TeamMember = SecureViewTeamData["teamMembers"][number];
export type BlogPost = SecureViewBlogData["blogPosts"][number];
export type WhyChooseUsFeature = SecureViewWhyChooseUsData["features"][number];
export type TestimonialItem = SecureViewTestimonialData["testimonials"][number];

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

// ── Canonical Mapped Site Data Object ──
const sec = siteData.SecureView.sections;

const siteMap = {
  navbar: sec.navbar.variants.SecureViewNavbar1,
  footer: sec.footer.variants.SecureViewFooter1,
  hero: sec.hero.variants.SecureViewHero1,
  about: sec.about.variants.SecureViewAbout1,
  services: sec.services.variants.SecureViewServices1,
  caseStudies: sec.caseStudies.variants.SecureViewCaseStudies1,
  team: sec.team.variants.SecureViewTeam1,
  blog: sec.blog.variants.SecureViewBlog1,
  whyChooseUs: sec.whyChooseUs.variants.SecureViewWhyChooseUs1,
  cta: sec.cta.variants.SecureViewCta1,
  pageTopSection: sec.pageTopSection.variants.SecureViewPageTopSection1,
  testimonial: sec.testimonial.variants.SecureViewTestimonial1,

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

  // Root Tree
  SecureView: siteData.SecureView,
};

export type SiteData = typeof siteMap;
export const site = siteMap;
export default Object.assign(siteMap, siteData);

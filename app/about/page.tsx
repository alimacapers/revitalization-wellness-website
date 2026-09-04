import type { Metadata } from 'next';
import { InnerHero } from '../components/InnerHero';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = { title: 'About Us | Revitalization Wellness Consultants' };

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Who We Are" title="Nurse led. Community rooted." text="A wellness practice helping people build skills, confidence, health awareness, and belonging." image="/about-happy.jpg" alt="A young woman with Down syndrome connecting with someone during a video call" imagePosition="center 28%" />
      <section className="inner-intro">
        <div><p className="pretitle">Welcome to RWC</p><h2>We help people belong—not simply visit.</h2></div>
        <div><p>Revitalization Wellness Consultants is a nurse-led wellness practice offering community engagement and community coaching for adults and transition-age youth with developmental disabilities across Fairfax County and Northern Virginia.</p><p>Founded by Taisha Holmes-Bulgin, BSN, RN, RWC pairs more than thirteen years of clinical experience with movement, creative arts, cooking, adaptive sports, digital life, faith, and community partnerships.</p></div>
      </section>
      <section className="values-row">
        <article><span>01</span><h3>Person centered</h3><p>Programming begins with each person’s ISP goals, communication style, sensory needs, interests, and choices.</p></article>
        <article><span>02</span><h3>Health aware</h3><p>A registered nurse’s perspective helps connect everyday experiences with wellness, self-advocacy, and prevention.</p></article>
        <article><span>03</span><h3>Consistent</h3><p>Small ratios, familiar staff, and plain-language progress notes give families and agencies a dependable partner.</p></article>
        <article><span>04</span><h3>Welcoming</h3><p>Faith centered and welcoming to every person and every family, with dignity and belonging at the center.</p></article>
      </section>
      <section className="founder-band">
        <div><p className="pretitle">Founder & Director</p><h2>Taisha Holmes-Bulgin, BSN, RN</h2><p>Registered Nurse • Certified Juice Therapist • Detox & Wellness Coach • Plant-Based Chef</p></div>
        <blockquote>“We do not fill hours. We build lives that people are proud of.”</blockquote>
      </section>
      <SiteFooter />
    </main>
  );
}

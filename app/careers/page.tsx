import type { Metadata } from 'next';
import { InnerHero } from '../components/InnerHero';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = { title: 'Careers | Revitalization Wellness Consultants' };

export default function CareersPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Grow With Us" title="Help build lives people are proud of." text="Bring your patience, creativity, reliability, and belief in the potential of every person." image="/careers-helping.jpg" alt="A diverse group of people supporting one another during an outdoor community experience" />
      <section className="inner-intro"><div><p className="pretitle">Careers at RWC</p><h2>Community support takes the right people.</h2></div><div><p>RWC values team members who listen closely, coach with dignity, communicate clearly, and can turn everyday moments into meaningful opportunities to learn.</p><p>Current openings and application instructions will be posted here as they become available. General expressions of interest are welcome.</p><a className="lime-button" href="/contact">Contact Our Team <b>→</b></a></div></section>
      <section className="values-row careers-values"><article><span>01</span><h3>Person-first thinking</h3><p>Respect each participant’s voice, pace, preferences, and right to make choices.</p></article><article><span>02</span><h3>Calm consistency</h3><p>Show up reliably, follow through, and create a safe rhythm for growth.</p></article><article><span>03</span><h3>Creative coaching</h3><p>Use movement, art, food, technology, and community life to make goals meaningful.</p></article><article><span>04</span><h3>Team communication</h3><p>Partner well with families, agencies, support coordinators, and fellow staff.</p></article></section>
      <SiteFooter />
    </main>
  );
}

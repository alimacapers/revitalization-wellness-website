import type { Metadata } from 'next';
import { InnerHero } from '../components/InnerHero';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = { title: 'Resources | Revitalization Wellness Consultants' };

export default function ResourcesPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Resources" title="A clearer path to the right support." text="Helpful starting points for families, support coordinators, group homes, day programs, and community partners." image="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="A group of young adults sharing food and conversation around a table" />
      <section className="resource-grid"><article><p className="pretitle">Who We Serve</p><h2>Adults & transition-age youth</h2><p>RWC programming is designed for people with developmental disabilities whose goals include community participation, wellness, communication, independent living, creativity, social connection, or pre-employment growth.</p></article><article><p className="pretitle">Before a Referral</p><h2>Your referral checklist</h2><ul><li>Current Individual Support Plan</li><li>Interests, strengths, and preferred activities</li><li>Communication and sensory support needs</li><li>Health or mobility considerations</li><li>Authorized services and scheduling needs</li></ul></article><article><p className="pretitle">For Agencies</p><h2>A partner who notices</h2><p>RWC welcomes conversations with CSB support coordinators, group-home directors, day-program managers, community centers, and congregations about individual referrals, block schedules, classes, and sponsorships.</p></article></section>
      <section className="resource-cta"><div><p className="pretitle">Let Us Serve Your Person</p><h2>Bring the ISP. We’ll map programming to every goal.</h2></div><a className="lime-button" href="/contact">Start a Referral <b>→</b></a></section>
      <SiteFooter />
    </main>
  );
}

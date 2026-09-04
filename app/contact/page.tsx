import type { Metadata } from 'next';
import { ContactPanel } from '../components/ContactPanel';
import { InnerHero } from '../components/InnerHero';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = { title: 'Contact Us | Revitalization Wellness Consultants' };

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="Contact Us" title="Let’s talk about the person, not just the service." text="Call or send a message to ask about programs, eligibility, scheduling, and referrals." image="https://images.pexels.com/photos/9722008/pexels-photo-9722008.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Young adults connecting through a community gardening activity" />
      <section className="contact-intro"><p className="pretitle">Alexandria, Virginia</p><h2>Serving communities across Northern Virginia</h2><p>Call <a href="tel:+19176879317"><strong>(917) 687-9317</strong></a>, email <a href="mailto:Revitalizationwellness@gmail.com"><strong>Revitalizationwellness@gmail.com</strong></a>, or visit us at <strong>2121 Eisenhower Avenue, Suite 219, Alexandria, Virginia 22314</strong>.</p><ul className="area-pills"><li>Alexandria</li><li>Fairfax</li><li>Springfield</li><li>McLean</li><li>Burke</li><li>Tysons Corner</li></ul></section>
      <ContactPanel compact />
      <SiteFooter />
    </main>
  );
}

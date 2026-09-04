import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-top">
        <div><p className="pretitle">Get in Touch</p><h2>Contact Details</h2><span>Call or send a message to ask about programs, eligibility, scheduling, or referrals.</span></div>
        <div className="footer-contact-item"><i>✆</i><div><h3>Talk<br />to Us</h3><p><a href="tel:+19176879317">(917) 687-9317</a><br /><a href="mailto:Revitalizationwellness@gmail.com">Revitalizationwellness@gmail.com</a><br />Program and referral inquiries</p></div></div>
        <div className="footer-contact-item"><i>●</i><div><h3>Locate<br />Us</h3><p>2121 Eisenhower Avenue, Suite 219<br />Alexandria, Virginia 22314</p></div></div>
      </div>
      <div className="footer-bottom">
        <Link className="rwc-logo footer-logo" href="/"><span className="rwc-symbol">RWC</span><span className="rwc-name"><strong>Revitalization</strong><small>Wellness Consultants LLC</small><em>Restored • Renewed • Reconnected</em></span></Link>
        <p><strong>Services:</strong><br />Community Engagement • Community Coaching • Nurse-Led Wellness</p>
        <nav aria-label="Footer navigation"><Link href="/">Home</Link><i>•</i><Link href="/about">About Us</Link><i>•</i><Link href="/services">Services</Link><i>•</i><Link href="/careers">Careers</Link><i>•</i><Link href="/resources">Resources</Link><i>•</i><Link href="/contact">Contact Us</Link></nav>
        <small>© 2026 Revitalization Wellness Consultants LLC. Faith centered. Nurse led. Community rooted.</small>
      </div>
    </footer>
  );
}

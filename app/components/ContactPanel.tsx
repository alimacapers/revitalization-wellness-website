export function ContactPanel({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`contact-wrap${compact ? ' contact-wrap-page' : ''}`} id="contact">
      <div className="message-card">
        <p className="pretitle">Reach Out to Us</p>
        <h2>Send Us a Message</h2>
        <p>Tell us about the person, their interests, and the goals they want to pursue.</p>
        <form aria-label="Contact form">
          <label><span>Full Name</span><input type="text" name="name" placeholder="Full Name" /></label>
          <label><span>Email Address</span><input type="email" name="email" placeholder="Email Address" /></label>
          <label><span>Message</span><textarea name="message" placeholder="Message(s)" rows={4} /></label>
          <label className="consent"><input type="checkbox" /> <span>I agree to the collection of this information for the purpose of responding to my request.</span></label>
          <div className="form-bottom"><div className="captcha-placeholder"><span>□</span> I’m not a robot <b>reCAPTCHA</b></div><button type="button" className="lime-button">Submit <b>→</b></button></div>
          <small>Prefer to call? Reach RWC at (917) 687-9317.</small>
        </form>
      </div>
      <div className="contact-actions-panel">
        <article><p className="pretitle">Start Here</p><h2>Submit Your Referral</h2><p>Support coordinators, group-home directors, day-program managers, community centers, and families are welcome.</p><a href="/contact" className="white-button">Click Here <b>→</b></a></article>
        <article><p className="pretitle">Explore the Program</p><h2>See How RWC Supports Real-Life Goals</h2><p>Learn how community engagement, coaching, wellness, creativity, and daily living skills can support the person’s ISP goals.</p><a href="/services" className="white-button">View Services <b>→</b></a></article>
      </div>
    </section>
  );
}

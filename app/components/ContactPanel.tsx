'use client';

import { useState, type FormEvent } from 'react';

export function ContactPanel({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className={`contact-wrap${compact ? ' contact-wrap-page' : ''}`} id="contact">
      <div className="message-card">
        <p className="pretitle">Reach Out to Us</p>
        <h2>Send Us a Message</h2>
        <p>Tell us about the person, their interests, and the goals they want to pursue.</p>
        <form aria-label="Contact form" onSubmit={submitContact}>
          <label><span>Full Name</span><input type="text" name="name" placeholder="Full Name" autoComplete="name" required /></label>
          <label><span>Email Address</span><input type="email" name="email" placeholder="Email Address" autoComplete="email" required /></label>
          <label><span>Inquiry Type</span><select name="inquiryType" defaultValue="General inquiry" aria-label="Inquiry type"><option>General inquiry</option><option>New referral</option><option>Program information</option><option>Employment</option></select></label>
          <label><span>Message</span><textarea name="message" placeholder="Message(s)" rows={4} required /></label>
          <label className="website-field" aria-hidden="true"><span>Website</span><input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
          <label className="consent"><input type="checkbox" name="consent" value="yes" required /> <span>I agree to the collection of this information for the purpose of responding to my request.</span></label>
          <div className="form-bottom"><span className="secure-form-note">Secure inquiry form</span><button type="submit" className="lime-button" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Submit'} <b>→</b></button></div>
          <p className={`form-status ${status}`} aria-live="polite">{status === 'success' ? 'Thank you. Your message has been sent.' : status === 'error' ? 'We could not send your message. Please call (917) 687-9317.' : ''}</p>
          <small>Prefer direct contact? Call <a href="tel:+19176879317">(917) 687-9317</a> or email <a href="mailto:Revitalizationwellness@gmail.com">Revitalizationwellness@gmail.com</a>.</small>
        </form>
      </div>
      <div className="contact-actions-panel">
        <article><p className="pretitle">Start Here</p><h2>Submit Your Referral</h2><p>Support coordinators, group-home directors, day-program managers, community centers, and families are welcome.</p><a href="/contact#contact" className="white-button">Click Here <b>→</b></a></article>
        <article><p className="pretitle">Explore the Program</p><h2>See How RWC Supports Real-Life Goals</h2><p>Learn how community engagement, coaching, wellness, creativity, and daily living skills can support the person’s ISP goals.</p><a href="/services" className="white-button">View Services <b>→</b></a></article>
      </div>
    </section>
  );
}

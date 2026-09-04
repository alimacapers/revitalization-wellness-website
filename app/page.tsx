import Image from 'next/image';
import { ContactPanel } from './components/ContactPanel';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';

const services = [
  {
    icon: 'CE',
    first: 'Community',
    second: 'Engagement',
    text: 'Meaningful experiences that build confidence, connection, and belonging in real community settings.',
  },
  {
    icon: 'CC',
    first: 'Community',
    second: 'Coaching',
    text: 'One-to-one, ISP-aligned coaching shaped around communication style, sensory needs, and personal goals.',
  },
  {
    icon: 'RN',
    first: 'Nurse-Led',
    second: 'Wellness',
    text: 'Plain-language health education, movement, nutrition, self-advocacy, and wellness habits people can use.',
  },
];

const sampleDay = [
  { time: '9:00 AM', title: 'Welcome & Morning Meetup', text: 'Arrival, check-in, choice-making, and a clear plan for the day.' },
  { time: '9:30 AM', title: 'Community Skills', text: 'A real-world outing such as the library, café, recreation center, shopping, or volunteering.' },
  { time: '11:00 AM', title: 'Move & Thrive', text: 'Adaptive movement, sports, dance, yoga, or a wellness lesson.' },
  { time: '12:00 PM', title: 'Lunch & Connection', text: 'Meal skills, conversation, budgeting practice, and time with peers.' },
  { time: '1:00 PM', title: 'Choice Studio', text: 'Creative expression, digital life, garden-to-table, or an ISP-focused coaching session.' },
  { time: '2:30 PM', title: 'Community Connection', text: 'Dining out, a local event, recreation, or another interest-led community experience.' },
  { time: '4:00 PM', title: 'Reflect & Reset', text: 'Celebrate progress, document ISP goals, and practice end-of-day routines.' },
  { time: '5:00 PM', title: 'Departure', text: 'Share highlights, gather belongings, and head home after a full day.' },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="reference-hero">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/community-friends.jpg" aria-label="Young adults, including a wheelchair user, spending time together in the community">
          <source src="/community-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="reference-hero-copy">
          <h1>Restored. Renewed.<br /><span>Reconnected.</span></h1>
          <p>Nurse-led community engagement and coaching that helps people build skills, strengthen wellness, and belong.</p>
          <a className="lime-button" href="/contact">Contact RWC <b>→</b></a>
        </div>

        <div className="hero-services" id="services">
          {services.map((service) => (
            <article key={service.second}>
              <div className="service-title"><h2>{service.first}<br /><span>{service.second}</span></h2><i>{service.icon}</i></div>
              <p>{service.text}</p>
              <a href="/services" aria-label={`Explore ${service.first} ${service.second}`}>→</a>
            </article>
          ))}
        </div>
      </section>

      <section className="welcome-section" id="programs">
        <div className="welcome-heading">
          <p>Programs People Look Forward To</p>
          <h2>Skills, wellness, creativity, and a real place in the community.</h2>
        </div>
        <div className="photo-pair activity-gallery">
          <figure><Image fill sizes="(max-width: 760px) 100vw, 33vw" src="/group-creative.jpg" alt="A group of adults painting together during a creative workshop" /><figcaption>Create & Express <span>Art, storytelling, open mic, and creator skills</span></figcaption></figure>
          <figure><Image fill sizes="(max-width: 760px) 100vw, 33vw" src="/group-cooking.jpg" alt="A group of young adults preparing food together during an interactive cooking activity" /><figcaption>Kitchen Confidence <span>Cooking, grocery trips, nutrition, and budgeting</span></figcaption></figure>
          <figure><Image fill sizes="(max-width: 760px) 100vw, 33vw" src="/group-dining.jpg" alt="A group of friends eating out, laughing, and socializing at a restaurant" /><figcaption>Dining & Social Life <span>Ordering, conversation, friendship, and community confidence</span></figcaption></figure>
        </div>

        <div className="welcome-feature">
          <div className="feature-photo"><Image fill sizes="(max-width: 900px) 100vw, 58vw" src="/move-thrive.jpg" alt="A young woman with Down syndrome participating in an adaptive yoga and wellness activity" /></div>
          <div className="feature-copy">
            <p className="pretitle">Hello & Welcome to</p>
            <h2>Revitalization Wellness Consultants LLC</h2>
            <p>Most agencies take people into the community. RWC helps people belong there. We combine a registered nurse’s perspective with movement, creative arts, healthy cooking, adaptive sports, digital life, faith, and local partnerships.</p>
            <div className="feature-tags"><span>Move & Thrive</span><span>Journey Champions</span><span>Digital Life</span><span>Garden to Table</span></div>
            <a className="lime-button" href="/about">About Us <b>→</b></a>
          </div>
        </div>
      </section>

      <section className="schedule-section" id="schedule">
        <div className="schedule-heading">
          <div><p className="pretitle">A Day With RWC • 9:00 AM–5:00 PM</p><h2>A sample community engagement schedule</h2></div>
          <p>Each day is individualized around ISP goals, interests, sensory needs, weather, and community opportunities. This example helps families picture what a typical day can include.</p>
        </div>
        <div className="schedule-grid">
          {sampleDay.map((item, index) => <article key={item.time}><time>{item.time}</time><div className="schedule-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="schedule-entry"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
        </div>
        <p className="schedule-note">Activities may also be selected à la carte or arranged in individualized coaching blocks.</p>
      </section>

      <section className="mission-section" id="about">
        <div className="mission-copy">
          <p className="pretitle">We Are Committed</p>
          <h2>Mission Statement</h2>
          <p>We do not fill hours. We build lives people are proud of. Every experience is designed around the person’s ISP goals, sensory needs, communication style, interests, and choices—with small ratios, consistent support, and progress notes families can understand.</p>
          <a className="lime-button" href="/about">About Us <b>→</b></a>
        </div>
        <div className="mission-photo"><Image fill sizes="(max-width: 820px) 100vw, 48vw" src="/service-engagement.jpg" alt="A happy group of young adults sharing high fives during an outdoor community activity" /></div>
        <div className="founder-note"><strong>Nurse owned & operated</strong><span>Led by Taisha Holmes-Bulgin, BSN, RN, with more than 13 years of clinical experience.</span></div>
      </section>

      <section className="service-area-section">
        <div><p className="pretitle">Where We Serve</p><h2>Alexandria and Northern Virginia</h2><p>Community-based support close to the places people already live, learn, work, worship, and connect.</p></div>
        <ul aria-label="Primary Northern Virginia service areas"><li>Alexandria</li><li>Fairfax</li><li>Springfield</li><li>McLean</li><li>Burke</li><li>Tysons Corner</li></ul>
      </section>

      <ContactPanel />
      <SiteFooter />
    </main>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import { InnerHero } from '../components/InnerHero';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';

export const metadata: Metadata = { title: 'Services | Revitalization Wellness Consultants' };

const serviceGroups = [
  {
    n: '01',
    title: 'Community Engagement',
    image: '/service-nutrition-new.jpg',
    position: 'center 24%',
    alt: 'A smiling chef with Down syndrome building healthy cooking skills',
    text: 'Purposeful participation in everyday community life, shaped around ISP outcomes, choice, connection, confidence, and contribution.',
    items: [
      { title: 'Move & Thrive', description: 'Inclusive fitness, recreation, and movement activities that build confidence, healthy routines, and community connections.' },
      { title: 'Create & Express', description: 'Hands-on art, music, and creative projects that encourage self-expression, communication, and shared experiences.' },
      { title: 'Kitchen Confidence', description: 'Practical cooking, meal planning, food-safety, and dining experiences that strengthen independence and social skills.' },
      { title: 'Digital Life', description: 'Guided practice using phones, apps, and online tools safely for communication, navigation, learning, and everyday tasks.' },
    ],
  },
  {
    n: '02',
    title: 'Community Coaching',
    image: '/service-wellness-new.jpg',
    position: 'center',
    alt: 'A coach supporting a young woman with Down syndrome during a fitness activity',
    text: 'Individualized coaching in real-world settings for communication, navigation, budgeting, self-advocacy, healthy routines, and meaningful roles.',
    items: [
      { title: 'Grocery & budget trips', description: 'Real-world practice with shopping lists, price comparisons, money management, healthy choices, and checkout skills.' },
      { title: 'Event Crew job training', description: 'Supported opportunities to practice teamwork, following directions, customer service, setup, cleanup, and workplace habits.' },
      { title: 'Micro-Business Studio', description: 'A supportive space to explore simple business ideas, create products, practice marketing, and build entrepreneurship skills.' },
      { title: 'Faith & fellowship connections', description: 'Person-centered support for joining faith communities, fellowship groups, and meaningful social activities when desired.' },
    ],
  },
  {
    n: '03',
    title: 'Nurse-Led Wellness',
    image: '/service-community-new.jpg',
    position: 'center',
    alt: 'A young woman with Down syndrome connecting with a community partner over lunch',
    text: 'Accessible health education and routines guided by a registered nurse and adapted to each person’s abilities, communication, and sensory needs.',
    items: [
      { title: 'Know Your Numbers', description: 'Easy-to-understand education about common health measures and why routine wellness checks matter.' },
      { title: 'Health Literacy Circle', description: 'Interactive conversations that make health information, appointments, medications, and self-advocacy easier to understand.' },
      { title: 'Rest & Reset', description: 'Calming routines and practical strategies that support sleep, stress management, emotional regulation, and daily balance.' },
      { title: 'Sensory-Friendly Wellness', description: 'Adapted wellness activities designed around individual communication, comfort, sensory preferences, and support needs.' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <InnerHero eyebrow="What We Do" title="Support that moves into real life." text="Community engagement, community coaching, and nurse-led wellness built around the whole person." image="/services-hero.jpg" alt="A coach helping a young woman with Down syndrome during an adaptive boxing session" />
      <section className="service-list">
        {serviceGroups.map(group => <article key={group.n}><span>{group.n}</span><figure className="service-visual"><Image fill sizes="(max-width: 760px) 100vw, 26vw" src={group.image} alt={group.alt} style={{ objectPosition: group.position }} /></figure><div><h2>{group.title}</h2><p>{group.text}</p></div><ul className="service-details">{group.items.map(item => <li key={item.title}><details><summary><span>{item.title}</span><i aria-hidden="true"></i></summary><p>{item.description}</p></details></li>)}</ul></article>)}
      </section>
      <section className="journey-callout"><div><p className="pretitle">Featured Partnership</p><h2>Journey Champions with Success Journey Sports</h2></div><p>An eight-week adaptive athletics cycle with six weeks of skills and conditioning, team-building, Journey Games, and a pathway for returning participants to become Champion Ambassadors.</p></section>
      <section className="funding-note"><h2>Ways to access services</h2><div><p><strong>DD Waiver</strong> Community Engagement and Community Coaching following required DBHDS licensure, service authorization, and DMAS enrollment.</p><p><strong>Agency contracts</strong> Fee-for-service and block schedules for group homes, day programs, and community centers.</p><p><strong>Private pay</strong> Per-session and eight-week cycle options, with sliding-scale availability.</p><p><strong>Sponsorship</strong> Community groups may sponsor Journey Champions or a Family Wellness Night.</p></div></section>
      <SiteFooter />
    </main>
  );
}

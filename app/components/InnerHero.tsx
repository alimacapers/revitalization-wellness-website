import Image from 'next/image';

export function InnerHero({ eyebrow, title, text, image, alt, imagePosition }: { eyebrow: string; title: string; text: string; image: string; alt: string; imagePosition?: string }) {
  return (
    <section className="inner-hero">
      <Image fill priority sizes="100vw" src={image} alt={alt} style={imagePosition ? { objectPosition: imagePosition } : undefined} />
      <div className="inner-hero-shade" />
      <div className="inner-hero-copy"><p>{eyebrow}</p><h1>{title}</h1><span>{text}</span></div>
    </section>
  );
}
